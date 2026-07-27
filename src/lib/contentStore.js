import fs from "fs";
import path from "path";
import { initialContent } from "@/data/initialContent";

const dataDir = path.join(process.cwd(), "src", "data");
const contentFilePath = path.join(dataDir, "content.json");
const leadsFilePath = path.join(dataDir, "leads.json");

function ensureDirExists() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

export function getContent() {
  try {
    ensureDirExists();
    if (!fs.existsSync(contentFilePath)) {
      fs.writeFileSync(contentFilePath, JSON.stringify(initialContent, null, 2), "utf8");
      return initialContent;
    }
    const raw = fs.readFileSync(contentFilePath, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading content.json, falling back to initialContent:", err);
    return initialContent;
  }
}

export function saveContent(newContent) {
  try {
    ensureDirExists();
    fs.writeFileSync(contentFilePath, JSON.stringify(newContent, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error writing content.json:", err);
    return false;
  }
}

export function getLeads() {
  try {
    ensureDirExists();
    if (!fs.existsSync(leadsFilePath)) {
      const defaultLeads = [
        {
          id: "lead-101",
          name: "Michael Sterling",
          email: "m.sterling@euroautoparts.de",
          phone: "+49 89 2341 8920",
          company: "EuroAuto Parts GmbH",
          country: "Germany",
          message: "Interested in regional distribution terms for air suspension struts and compressors in Southern Germany.",
          status: "Contacted",
          remark: "Sent B2B price catalog on July 25. Following up next Tuesday.",
          createdAt: "2026-07-25T14:30:00Z"
        },
        {
          id: "lead-102",
          name: "Carlos Mendez",
          email: "carlos.m@ibericasuspensiones.es",
          phone: "+34 91 555 4321",
          company: "Iberica Suspensiones S.L.",
          country: "Spain",
          message: "Looking for OEM replacement valve blocks and control arms. Minimum order quantities required.",
          status: "New",
          remark: "Initial enquiry received.",
          createdAt: "2026-07-27T09:15:00Z"
        }
      ];
      fs.writeFileSync(leadsFilePath, JSON.stringify(defaultLeads, null, 2), "utf8");
      return defaultLeads;
    }
    const raw = fs.readFileSync(leadsFilePath, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading leads.json:", err);
    return [];
  }
}

export function saveLeads(leads) {
  try {
    ensureDirExists();
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error writing leads.json:", err);
    return false;
  }
}
