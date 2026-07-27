import { NextResponse } from "next/server";
import { getLeads, saveLeads } from "@/lib/contentStore";

export async function GET() {
  try {
    const leads = getLeads();
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const leads = getLeads();

    const newLead = {
      id: "lead-" + Date.now(),
      name: body.name || "Anonymous",
      email: body.email || "",
      phone: body.phone || "",
      company: body.company || "",
      country: body.country || "",
      message: body.message || "",
      status: "New",
      remark: "Initial inquiry received via website form.",
      createdAt: new Date().toISOString()
    };

    leads.unshift(newLead);
    saveLeads(leads);

    return NextResponse.json({ message: "Inquiry submitted successfully", lead: newLead });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 400 });
  }
}

export async function PATCH(request) {
  try {
    const { id, status, remark } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "Lead ID is required" }, { status: 400 });
    }

    const leads = getLeads();
    const index = leads.findIndex((l) => l.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    if (status !== undefined) leads[index].status = status;
    if (remark !== undefined) leads[index].remark = remark;

    saveLeads(leads);
    return NextResponse.json({ message: "Lead updated successfully", lead: leads[index] });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
  }
}
