"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdminPage() {
  // ─── AUTH STATE ───────────────────────────────────────────────
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [showLoginPass, setShowLoginPass] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [credentials, setCredentials] = useState({ id: "1", password: "1" });

  // ─── SETTINGS STATE ───────────────────────────────────────────
  const [showSettings, setShowSettings] = useState(false);
  const [newId, setNewId] = useState("");
  const [newPass, setNewPass] = useState("");
  const [showNewPass, setShowNewPass] = useState(false);
  const [settingsSaved, setSettingsSaved] = useState(false);

  // ─── ADMIN CMS STATE ──────────────────────────────────────────
  const [activeTab, setActiveTab] = useState("home");
  const [content, setContent] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);
  const [leadFilter, setLeadFilter] = useState("all");
  const [leadSearch, setLeadSearch] = useState("");

  // FETCH CONTENT AND LEADS ON MOUNT (only after login)
  useEffect(() => {
    if (isLoggedIn) fetchData();
  }, [isLoggedIn]);

  // ─── LOGIN HANDLER ────────────────────────────────────────────
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginId === credentials.id && loginPass === credentials.password) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials. Please try again.");
    }
  };

  // ─── SETTINGS SAVE HANDLER ───────────────────────────────────
  const handleSaveSettings = () => {
    if (!newId.trim() || !newPass.trim()) return;
    setCredentials({ id: newId.trim(), password: newPass.trim() });
    setSettingsSaved(true);
    setTimeout(() => {
      setSettingsSaved(false);
      setShowSettings(false);
      setNewId("");
      setNewPass("");
    }, 1500);
  };

  // ─── LOGIN PAGE ───────────────────────────────────────────────
  if (!isLoggedIn) {
    return (
      <div style={{
        minHeight: "100vh", background: "#050B18",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-barlow, system-ui, sans-serif)",
        padding: "24px"
      }}>
        {/* Background glow */}
        <div style={{ position: "fixed", top: "20%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(14,165,233,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{
          width: "100%", maxWidth: "440px",
          background: "linear-gradient(135deg, rgba(11,19,43,0.95), rgba(7,14,32,0.98))",
          border: "1px solid rgba(56, 189, 248, 0.2)",
          borderRadius: "20px",
          padding: "48px 40px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(56,189,248,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
          position: "relative"
        }}>
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{ display: "inline-flex", background: "#ffffff", padding: "8px 20px", borderRadius: "10px", marginBottom: "20px" }}>
              <img src="/images/strahl-logo-final.png" alt="STRAHL" style={{ height: "28px", width: "auto" }} />
            </div>
            <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#38BDF8", fontWeight: "700", textTransform: "uppercase", margin: "0 0 6px 0" }}>Admin Portal</p>
            <h1 style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", margin: 0 }}>Management Studio</h1>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "8px" }}>Sign in to access the control panel</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* ID Field */}
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "rgba(255,255,255,0.6)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>Admin ID</label>
              <input
                type="text"
                value={loginId}
                onChange={e => { setLoginId(e.target.value); setLoginError(""); }}
                placeholder="Enter your admin ID"
                autoComplete="username"
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  border: loginError ? "1.5px solid rgba(239,68,68,0.6)" : "1.5px solid rgba(255,255,255,0.1)",
                  color: "#ffffff", fontSize: "14px", outline: "none",
                  transition: "border 0.2s", boxSizing: "border-box"
                }}
              />
            </div>

            {/* Password Field */}
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "rgba(255,255,255,0.6)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showLoginPass ? "text" : "password"}
                  value={loginPass}
                  onChange={e => { setLoginPass(e.target.value); setLoginError(""); }}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  style={{
                    width: "100%", padding: "12px 44px 12px 16px", borderRadius: "10px",
                    background: "rgba(255,255,255,0.05)",
                    border: loginError ? "1.5px solid rgba(239,68,68,0.6)" : "1.5px solid rgba(255,255,255,0.1)",
                    color: "#ffffff", fontSize: "14px", outline: "none",
                    transition: "border 0.2s", boxSizing: "border-box"
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPass(!showLoginPass)}
                  style={{
                    position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer",
                    color: "rgba(255,255,255,0.4)", padding: "4px", display: "flex", alignItems: "center"
                  }}
                  aria-label={showLoginPass ? "Hide password" : "Show password"}
                >
                  {showLoginPass ? (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {loginError && (
              <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "8px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#F87171" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span style={{ fontSize: "13px", color: "#F87171", fontWeight: "500" }}>{loginError}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              style={{
                marginTop: "8px", padding: "14px", borderRadius: "10px",
                background: "linear-gradient(135deg, #0EA5E9, #2563EB)",
                border: "none", color: "#ffffff", fontSize: "14px", fontWeight: "700",
                cursor: "pointer", letterSpacing: "0.5px",
                boxShadow: "0 8px 24px rgba(37,99,235,0.4)",
                transition: "transform 0.15s, box-shadow 0.15s"
              }}
            >
              Sign In to Admin Panel
            </button>
          </form>

          {/* Footer */}
          <p style={{ textAlign: "center", fontSize: "11px", color: "rgba(255,255,255,0.2)", marginTop: "28px" }}>
            STRAHL™ CMS — Restricted Access
          </p>
        </div>
      </div>
    );
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      const [resContent, resLeads] = await Promise.all([
        fetch("/api/content"),
        fetch("/api/leads")
      ]);
      const dataContent = await resContent.json();
      const dataLeads = await resLeads.json();
      setContent(dataContent);
      setLeads(Array.isArray(dataLeads) ? dataLeads : []);
    } catch (err) {
      console.error("Failed to load admin data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveContent = async () => {
    try {
      setSaving(true);
      setSaveMessage(null);
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content)
      });
      if (res.ok) {
        setSaveMessage({ type: "success", text: "All changes saved successfully!" });
      } else {
        setSaveMessage({ type: "error", text: "Failed to save changes." });
      }
    } catch (err) {
      setSaveMessage({ type: "error", text: "Error saving data: " + err.message });
    } finally {
      setSaving(false);
      setTimeout(() => setSaveMessage(null), 4000);
    }
  };

  const handleUpdateLeadStatus = async (id, status, remark) => {
    try {
      const res = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status, remark })
      });
      if (res.ok) {
        const updated = await res.json();
        setLeads(leads.map((l) => (l.id === id ? updated.lead : l)));
        setSaveMessage({ type: "success", text: `Lead status updated to ${status}` });
        setTimeout(() => setSaveMessage(null), 3000);
      }
    } catch (err) {
      console.error("Failed to update lead:", err);
    }
  };

  if (loading || !content) {
    return (
      <div style={{ background: "#050B18", minHeight: "100vh", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: "40px", height: "40px", border: "3px solid rgba(56, 189, 248, 0.2)", borderTop: "3px solid #38BDF8", borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 16px auto" }} />
          <p style={{ color: "#38BDF8", fontWeight: "600" }}>Loading STRAHL Admin Workspace...</p>
        </div>
      </div>
    );
  }

  const filteredLeads = leads.filter((l) => {
    const matchesFilter = leadFilter === "all" || l.status.toLowerCase() === leadFilter.toLowerCase();
    const query = leadSearch.toLowerCase();
    const matchesSearch =
      !query ||
      l.name.toLowerCase().includes(query) ||
      l.company.toLowerCase().includes(query) ||
      l.email.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ background: "#050B18", minHeight: "100vh", color: "#ffffff", fontFamily: "var(--font-sans, system-ui, sans-serif)" }}>
      {/* ADMIN TOP NAVIGATION BAR */}
      <header style={{ background: "#0B132B", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "14px 30px", position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{ background: "#ffffff", padding: "4px 10px", borderRadius: "6px", display: "flex", alignItems: "center" }}>
            <Image src="/images/strahl-logo-final.png" alt="STRAHL Logo" width={100} height={24} style={{ height: "22px", width: "auto" }} />
          </div>
          <div>
            <span style={{ fontSize: "11px", letterSpacing: "2px", color: "#38BDF8", fontWeight: "700", textTransform: "uppercase" }}>CMS CONTROL CENTER</span>
            <h1 style={{ fontSize: "16px", fontWeight: "800", color: "#ffffff", margin: 0 }}>STRAHL Management Studio</h1>
          </div>
        </div>

        {/* TOP BUTTONS */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          {saveMessage && (
            <div style={{ padding: "6px 14px", borderRadius: "20px", fontSize: "12.5px", fontWeight: "600", background: saveMessage.type === "success" ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)", border: saveMessage.type === "success" ? "1px solid #10B981" : "1px solid #EF4444", color: saveMessage.type === "success" ? "#34D399" : "#F87171" }}>
              {saveMessage.text}
            </div>
          )}

          {/* Settings Button */}
          <button onClick={() => { setShowSettings(true); setNewId(credentials.id); setNewPass(credentials.password); }} style={{ padding: "8px 14px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", fontSize: "12.5px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Settings
          </button>

          {/* Logout Button */}
          <button onClick={() => { setIsLoggedIn(false); setLoginId(""); setLoginPass(""); }} style={{ padding: "8px 14px", borderRadius: "8px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#F87171", fontSize: "12.5px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Logout
          </button>

          <Link href="/" target="_blank" style={{ padding: "8px 16px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff", textDecoration: "none", fontSize: "12.5px", fontWeight: "600", display: "flex", alignItems: "center", gap: "6px" }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Preview Site
          </Link>

          <button onClick={handleSaveContent} disabled={saving} style={{ padding: "8px 22px", borderRadius: "8px", background: "linear-gradient(135deg, #0EA5E9, #2563EB)", border: "none", color: "#ffffff", fontWeight: "700", fontSize: "13px", cursor: saving ? "wait" : "pointer", boxShadow: "0 4px 14px rgba(37, 99, 235, 0.4)" }}>
            {saving ? "Saving..." : "Save All Changes"}
          </button>
        </div>
      </header>

      {/* ─── SETTINGS MODAL ─────────────────────────────────────── */}
      {showSettings && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }} onClick={() => setShowSettings(false)}>
          <div style={{ background: "linear-gradient(135deg, #0B132B, #070E20)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: "16px", padding: "36px", width: "100%", maxWidth: "420px", boxShadow: "0 30px 80px rgba(0,0,0,0.7)" }} onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
              <div>
                <p style={{ fontSize: "10px", letterSpacing: "2px", color: "#38BDF8", fontWeight: "700", textTransform: "uppercase", margin: "0 0 4px 0" }}>Access Control</p>
                <h2 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", margin: 0 }}>Change Credentials</h2>
              </div>
              <button onClick={() => setShowSettings(false)} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "rgba(255,255,255,0.6)", cursor: "pointer", padding: "6px 10px", fontSize: "16px" }}>✕</button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* New ID */}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "7px" }}>New Admin ID</label>
                <input
                  type="text"
                  value={newId}
                  onChange={e => setNewId(e.target.value)}
                  placeholder="Enter new admin ID"
                  style={{ width: "100%", padding: "11px 14px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(255,255,255,0.1)", color: "#ffffff", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              {/* New Password */}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "7px" }}>New Password</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showNewPass ? "text" : "password"}
                    value={newPass}
                    onChange={e => setNewPass(e.target.value)}
                    placeholder="Enter new password"
                    style={{ width: "100%", padding: "11px 40px 11px 14px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(255,255,255,0.1)", color: "#ffffff", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                  />
                  <button type="button" onClick={() => setShowNewPass(!showNewPass)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)", padding: "4px", display: "flex", alignItems: "center" }}>
                    {showNewPass ? (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              {settingsSaved && (
                <div style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "8px", padding: "10px 14px", color: "#34D399", fontSize: "13px", fontWeight: "600", textAlign: "center" }}>✓ Credentials updated successfully!</div>
              )}

              <button
                onClick={handleSaveSettings}
                disabled={!newId.trim() || !newPass.trim()}
                style={{ marginTop: "6px", padding: "12px", borderRadius: "8px", background: "linear-gradient(135deg, #0EA5E9, #2563EB)", border: "none", color: "#ffffff", fontSize: "13.5px", fontWeight: "700", cursor: (!newId.trim() || !newPass.trim()) ? "not-allowed" : "pointer", opacity: (!newId.trim() || !newPass.trim()) ? 0.5 : 1, boxShadow: "0 6px 20px rgba(37,99,235,0.35)" }}
              >
                Save New Credentials
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADMIN TABS HEADER */}
      <div style={{ background: "#070E20", borderBottom: "1px solid rgba(255, 255, 255, 0.06)", padding: "0 30px", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: "8px", maxWidth: "1300px", margin: "0 auto" }}>
          {[
            { id: "home", label: "Home Page" },
            { id: "about", label: "About Page" },
            { id: "products", label: "Products Manager" },
            { id: "quality", label: "Quality Page" },
            { id: "partner", label: "Partner / Dealership" },
            { id: "leads", label: `Contact Inquiries (${leads.length})`, badge: leads.filter(l => l.status === "New").length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "16px 20px",
                border: "none",
                background: "transparent",
                color: activeTab === tab.id ? "#38BDF8" : "rgba(255, 255, 255, 0.6)",
                borderBottom: activeTab === tab.id ? "3px solid #38BDF8" : "3px solid transparent",
                fontWeight: activeTab === tab.id ? "700" : "500",
                fontSize: "13.5px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                whiteSpace: "nowrap"
              }}
            >
              {tab.label}
              {tab.badge > 0 && (
                <span style={{ background: "#EF4444", color: "#ffffff", fontSize: "10.5px", padding: "2px 6px", borderRadius: "10px", fontWeight: "800" }}>
                  {tab.badge} NEW
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ADMIN MAIN CONTENT AREA */}
      <main style={{ maxWidth: "1300px", margin: "30px auto", padding: "0 30px 60px 30px" }}>
        {/* ======================================================== */}
        {/* TAB 1: HOME PAGE MANAGER */}
        {/* ======================================================== */}
        {activeTab === "home" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* HERO SECTION EDITOR */}
            <SectionBox title="Hero Banner Section">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                <InputGroup label="Eyebrow Tag" value={content.home.hero.eyebrow} onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, eyebrow: e.target.value } } })} />
                <InputGroup label="Hero Title" value={content.home.hero.title} onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, title: e.target.value } } })} />
                <InputGroup label="Subtitle" value={content.home.hero.subtext} onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, subtext: e.target.value } } })} />
              </div>
              <TextAreaGroup label="Hero Description" value={content.home.hero.desc} onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, desc: e.target.value } } })} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                <InputGroup label="Primary Button Text" value={content.home.hero.ctaPrimaryText} onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, ctaPrimaryText: e.target.value } } })} />
                <InputGroup label="Primary Button Link" value={content.home.hero.ctaPrimaryLink} onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, ctaPrimaryLink: e.target.value } } })} />
                <InputGroup label="Secondary Button Text" value={content.home.hero.ctaSecondaryText} onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, ctaSecondaryText: e.target.value } } })} />
                <InputGroup label="Secondary Button Link" value={content.home.hero.ctaSecondaryLink} onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, ctaSecondaryLink: e.target.value } } })} />
              </div>
            </SectionBox>

            {/* FEATURED PRODUCTS SELECTOR */}
            <SectionBox title="FEATURED PRODUCTS 3D Podium Carousel">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                <InputGroup label="Section Eyebrow" value={content.home.featuredProducts.eyebrow} onChange={(e) => setContent({ ...content, home: { ...content.home, featuredProducts: { ...content.home.featuredProducts, eyebrow: e.target.value } } })} />
                <InputGroup label="Section Title" value={content.home.featuredProducts.title} onChange={(e) => setContent({ ...content, home: { ...content.home, featuredProducts: { ...content.home.featuredProducts, title: e.target.value } } })} />
              </div>
              <TextAreaGroup label="Section Description" value={content.home.featuredProducts.desc} onChange={(e) => setContent({ ...content, home: { ...content.home, featuredProducts: { ...content.home.featuredProducts, desc: e.target.value } } })} />

              <h4 style={{ fontSize: "14px", color: "#38BDF8", marginTop: "16px", marginBottom: "10px" }}>Select Products to Showcase in 3D Podium:</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
                {content.products.map((p) => {
                  const isFeatured = content.home.featuredProducts.featuredProductIds.includes(p.id);
                  return (
                    <label key={p.id} style={{ display: "flex", alignItems: "center", gap: "10px", background: isFeatured ? "rgba(56, 189, 248, 0.12)" : "rgba(255,255,255,0.03)", border: isFeatured ? "1px solid #38BDF8" : "1px solid rgba(255,255,255,0.08)", padding: "10px 14px", borderRadius: "10px", cursor: "pointer" }}>
                      <input
                        type="checkbox"
                        checked={isFeatured}
                        onChange={(e) => {
                          const currentIds = content.home.featuredProducts.featuredProductIds;
                          const newIds = e.target.checked ? [...currentIds, p.id] : currentIds.filter((id) => id !== p.id);
                          setContent({ ...content, home: { ...content.home, featuredProducts: { ...content.home.featuredProducts, featuredProductIds: newIds } } });
                        }}
                      />
                      <span style={{ fontSize: "13px", fontWeight: "600", color: isFeatured ? "#38BDF8" : "rgba(255,255,255,0.8)" }}>{p.name}</span>
                    </label>
                  );
                })}
              </div>
            </SectionBox>

            {/* PRODUCT CATEGORIES EDITOR */}
            <SectionBox title="Core Product Categories Cards">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                <InputGroup label="Section Eyebrow" value={content.home.categoriesSection.eyebrow} onChange={(e) => setContent({ ...content, home: { ...content.home, categoriesSection: { ...content.home.categoriesSection, eyebrow: e.target.value } } })} />
                <InputGroup label="Section Title" value={content.home.categoriesSection.title} onChange={(e) => setContent({ ...content, home: { ...content.home, categoriesSection: { ...content.home.categoriesSection, title: e.target.value } } })} />
              </div>
              <TextAreaGroup label="Section Description" value={content.home.categoriesSection.desc} onChange={(e) => setContent({ ...content, home: { ...content.home, categoriesSection: { ...content.home.categoriesSection, desc: e.target.value } } })} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
                <h4 style={{ fontSize: "14px", color: "#38BDF8", margin: 0 }}>Category Cards ({content.home.categoryCards.length})</h4>
                <AddButton
                  onClick={() => {
                    const newCard = { id: `cat-${Date.now()}`, title: "New Category", desc: "Category description.", items: ["Item 1", "Item 2"], icon: "air-suspension", link: "/products" };
                    setContent({ ...content, home: { ...content.home, categoryCards: [...content.home.categoryCards, newCard] } });
                  }}
                  label="+ Add New Category Card"
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px", marginTop: "12px" }}>
                {content.home.categoryCards.map((card, idx) => (
                  <CardEditorBox key={card.id || idx} title={`Category #${idx + 1}: ${card.title}`} onDelete={() => {
                    const updated = content.home.categoryCards.filter((_, i) => i !== idx);
                    setContent({ ...content, home: { ...content.home, categoryCards: updated } });
                  }}>
                    <InputGroup label="Card Title" value={card.title} onChange={(e) => {
                      const updated = [...content.home.categoryCards];
                      updated[idx].title = e.target.value;
                      setContent({ ...content, home: { ...content.home, categoryCards: updated } });
                    }} />
                    <TextAreaGroup label="Card Description" value={card.desc} onChange={(e) => {
                      const updated = [...content.home.categoryCards];
                      updated[idx].desc = e.target.value;
                      setContent({ ...content, home: { ...content.home, categoryCards: updated } });
                    }} />
                    <InputGroup label="Bulleted Items (comma separated)" value={card.items ? card.items.join(", ") : ""} onChange={(e) => {
                      const updated = [...content.home.categoryCards];
                      updated[idx].items = e.target.value.split(",").map((s) => s.trim());
                      setContent({ ...content, home: { ...content.home, categoryCards: updated } });
                    }} />
                  </CardEditorBox>
                ))}
              </div>
            </SectionBox>

            {/* THE STRAHL ADVANTAGE EDITOR */}
            <SectionBox title="THE STRAHL ADVANTAGE Section">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                <InputGroup label="Section Eyebrow" value={content.home.advantageSection.eyebrow} onChange={(e) => setContent({ ...content, home: { ...content.home, advantageSection: { ...content.home.advantageSection, eyebrow: e.target.value } } })} />
                <InputGroup label="Section Title" value={content.home.advantageSection.title} onChange={(e) => setContent({ ...content, home: { ...content.home, advantageSection: { ...content.home.advantageSection, title: e.target.value } } })} />
              </div>
              <TextAreaGroup label="Section Description" value={content.home.advantageSection.desc} onChange={(e) => setContent({ ...content, home: { ...content.home, advantageSection: { ...content.home.advantageSection, desc: e.target.value } } })} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
                <h4 style={{ fontSize: "14px", color: "#38BDF8", margin: 0 }}>Advantage Cards ({content.home.advantageCards.length})</h4>
                <AddButton
                  onClick={() => {
                    const nextNum = String(content.home.advantageCards.length + 1).padStart(2, "0");
                    const newAdv = { num: nextNum, title: "New Advantage", desc: "Advantage description." };
                    setContent({ ...content, home: { ...content.home, advantageCards: [...content.home.advantageCards, newAdv] } });
                  }}
                  label="+ Add Advantage Card"
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px", marginTop: "12px" }}>
                {content.home.advantageCards.map((adv, idx) => (
                  <CardEditorBox key={idx} title={`Advantage ${adv.num}: ${adv.title}`} onDelete={() => {
                    const updated = content.home.advantageCards.filter((_, i) => i !== idx);
                    setContent({ ...content, home: { ...content.home, advantageCards: updated } });
                  }}>
                    <InputGroup label="Number Badge" value={adv.num} onChange={(e) => {
                      const updated = [...content.home.advantageCards];
                      updated[idx].num = e.target.value;
                      setContent({ ...content, home: { ...content.home, advantageCards: updated } });
                    }} />
                    <InputGroup label="Title" value={adv.title} onChange={(e) => {
                      const updated = [...content.home.advantageCards];
                      updated[idx].title = e.target.value;
                      setContent({ ...content, home: { ...content.home, advantageCards: updated } });
                    }} />
                    <TextAreaGroup label="Description" value={adv.desc} onChange={(e) => {
                      const updated = [...content.home.advantageCards];
                      updated[idx].desc = e.target.value;
                      setContent({ ...content, home: { ...content.home, advantageCards: updated } });
                    }} />
                  </CardEditorBox>
                ))}
              </div>
            </SectionBox>

            {/* BUSINESS ENQUIRIES CTA SECTION */}
            <SectionBox title="BUSINESS ENQUIRIES CTA Section">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                <InputGroup label="Eyebrow" value={content.home.businessEnquiries.eyebrow} onChange={(e) => setContent({ ...content, home: { ...content.home, businessEnquiries: { ...content.home.businessEnquiries, eyebrow: e.target.value } } })} />
                <InputGroup label="Title" value={content.home.businessEnquiries.title} onChange={(e) => setContent({ ...content, home: { ...content.home, businessEnquiries: { ...content.home.businessEnquiries, title: e.target.value } } })} />
              </div>
              <TextAreaGroup label="Description" value={content.home.businessEnquiries.desc} onChange={(e) => setContent({ ...content, home: { ...content.home, businessEnquiries: { ...content.home.businessEnquiries, desc: e.target.value } } })} />
              <InputGroup label="Highlights (comma separated)" value={content.home.businessEnquiries.highlights.join(", ")} onChange={(e) => setContent({ ...content, home: { ...content.home, businessEnquiries: { ...content.home.businessEnquiries, highlights: e.target.value.split(",").map((s) => s.trim()) } } })} />
              <InputGroup label="Quote Statement" value={content.home.businessEnquiries.quote} onChange={(e) => setContent({ ...content, home: { ...content.home, businessEnquiries: { ...content.home.businessEnquiries, quote: e.target.value } } })} />
            </SectionBox>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: ABOUT PAGE MANAGER */}
        {/* ======================================================== */}
        {activeTab === "about" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* ABOUT BRAND HEADER */}
            <SectionBox title="ABOUT THE BRAND Header Banner">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                <InputGroup label="Eyebrow" value={content.about.header.eyebrow} onChange={(e) => setContent({ ...content, about: { ...content.about, header: { ...content.about.header, eyebrow: e.target.value } } })} />
                <InputGroup label="Main Title" value={content.about.header.title} onChange={(e) => setContent({ ...content, about: { ...content.about, header: { ...content.about.header, title: e.target.value } } })} />
              </div>
              <TextAreaGroup label="Banner Subtitle / Description" value={content.about.header.desc} onChange={(e) => setContent({ ...content, about: { ...content.about, header: { ...content.about.header, desc: e.target.value } } })} />
            </SectionBox>

            {/* WHO WE ARE SECTION */}
            <SectionBox title="WHO WE ARE Paragraphs">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                <InputGroup label="Section Title" value={content.about.whoWeAre.title} onChange={(e) => setContent({ ...content, about: { ...content.about, whoWeAre: { ...content.about.whoWeAre, title: e.target.value } } })} />
                <InputGroup label="Subtitle" value={content.about.whoWeAre.subtitle} onChange={(e) => setContent({ ...content, about: { ...content.about, whoWeAre: { ...content.about.whoWeAre, subtitle: e.target.value } } })} />
              </div>

              {content.about.whoWeAre.paragraphs.map((pText, pIdx) => (
                <div key={pIdx} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div style={{ flex: 1 }}>
                    <TextAreaGroup label={`Paragraph #${pIdx + 1}`} value={pText} onChange={(e) => {
                      const updatedP = [...content.about.whoWeAre.paragraphs];
                      updatedP[pIdx] = e.target.value;
                      setContent({ ...content, about: { ...content.about, whoWeAre: { ...content.about.whoWeAre, paragraphs: updatedP } } });
                    }} />
                  </div>
                  <button onClick={() => {
                    const updatedP = content.about.whoWeAre.paragraphs.filter((_, i) => i !== pIdx);
                    setContent({ ...content, about: { ...content.about, whoWeAre: { ...content.about.whoWeAre, paragraphs: updatedP } } });
                  }} style={{ background: "rgba(239, 68, 68, 0.2)", border: "1px solid #EF4444", color: "#F87171", borderRadius: "8px", padding: "8px 12px", cursor: "pointer", fontSize: "12px", marginTop: "24px" }}>
                    Delete
                  </button>
                </div>
              ))}

              <AddButton onClick={() => {
                const updatedP = [...content.about.whoWeAre.paragraphs, "New paragraph content."];
                setContent({ ...content, about: { ...content.about, whoWeAre: { ...content.about.whoWeAre, paragraphs: updatedP } } });
              }} label="+ Add Paragraph" />
            </SectionBox>

            {/* WHY STRAHL PILLARS (6 CARDS GRID) */}
            <SectionBox title="WHY STRAHL 6-Card Grid">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                <InputGroup label="Eyebrow" value={content.about.whyStrahlSection.eyebrow} onChange={(e) => setContent({ ...content, about: { ...content.about, whyStrahlSection: { ...content.about.whyStrahlSection, eyebrow: e.target.value } } })} />
                <InputGroup label="Section Title" value={content.about.whyStrahlSection.title} onChange={(e) => setContent({ ...content, about: { ...content.about, whyStrahlSection: { ...content.about.whyStrahlSection, title: e.target.value } } })} />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
                <h4 style={{ fontSize: "14px", color: "#38BDF8", margin: 0 }}>WHY STRAHL Pillar Cards ({content.about.whyCards.length})</h4>
                <AddButton onClick={() => {
                  const nextNum = String(content.about.whyCards.length + 1).padStart(2, "0");
                  const newPillar = { num: nextNum, title: "New Pillar", desc: "Pillar description.", icon: "shield" };
                  setContent({ ...content, about: { ...content.about, whyCards: [...content.about.whyCards, newPillar] } });
                }} label="+ Add Pillar Card" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px", marginTop: "12px" }}>
                {content.about.whyCards.map((card, idx) => (
                  <CardEditorBox key={idx} title={`Pillar ${card.num}: ${card.title}`} onDelete={() => {
                    const updated = content.about.whyCards.filter((_, i) => i !== idx);
                    setContent({ ...content, about: { ...content.about, whyCards: updated } });
                  }}>
                    <InputGroup label="Number (e.g. 01)" value={card.num} onChange={(e) => {
                      const updated = [...content.about.whyCards];
                      updated[idx].num = e.target.value;
                      setContent({ ...content, about: { ...content.about, whyCards: updated } });
                    }} />
                    <InputGroup label="Title" value={card.title} onChange={(e) => {
                      const updated = [...content.about.whyCards];
                      updated[idx].title = e.target.value;
                      setContent({ ...content, about: { ...content.about, whyCards: updated } });
                    }} />
                    <TextAreaGroup label="Description" value={card.desc} onChange={(e) => {
                      const updated = [...content.about.whyCards];
                      updated[idx].desc = e.target.value;
                      setContent({ ...content, about: { ...content.about, whyCards: updated } });
                    }} />
                  </CardEditorBox>
                ))}
              </div>
            </SectionBox>

            {/* MISSION & VISION */}
            <SectionBox title="Vision & Mission Section">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
                <div>
                  <InputGroup label="Vision Title" value={content.about.visionMission.visionTitle} onChange={(e) => setContent({ ...content, about: { ...content.about, visionMission: { ...content.about.visionMission, visionTitle: e.target.value } } })} />
                  <TextAreaGroup label="Vision Description" value={content.about.visionMission.visionDesc} onChange={(e) => setContent({ ...content, about: { ...content.about, visionMission: { ...content.about.visionMission, visionDesc: e.target.value } } })} />
                </div>
                <div>
                  <InputGroup label="Mission Title" value={content.about.visionMission.missionTitle} onChange={(e) => setContent({ ...content, about: { ...content.about, visionMission: { ...content.about.visionMission, missionTitle: e.target.value } } })} />
                  <TextAreaGroup label="Mission Description" value={content.about.visionMission.missionDesc} onChange={(e) => setContent({ ...content, about: { ...content.about, visionMission: { ...content.about.visionMission, missionDesc: e.target.value } } })} />
                </div>
              </div>
            </SectionBox>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: PRODUCTS MANAGER */}
        {/* ======================================================== */}
        {activeTab === "products" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff", margin: 0 }}>Product Inventory ({content.products.length})</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", margin: "4px 0 0 0" }}>Manage OE replacement products, card images, USPs, and technical specifications.</p>
              </div>
              <AddButton onClick={() => {
                const newId = Date.now();
                const newProd = {
                  id: newId,
                  name: "New Replacement Part",
                  cat: "Suspension Components",
                  sku: `ST-PR-${newId.toString().slice(-4)}`,
                  oeNumber: "OE-123456",
                  image: "/images/product_1.jpg",
                  isBestSeller: false,
                  usps: ["High durability material construction", "Direct OEM fitment guarantee"],
                  specs: [
                    { label: "Material Specification", value: "Premium Grade Steel / Rubber" },
                    { label: "Warranty", value: "12 Months" }
                  ]
                };
                setContent({ ...content, products: [newProd, ...content.products] });
              }} label="+ Add New Product" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
              {content.products.map((prod, pIdx) => (
                <div key={prod.id || pIdx} style={{ background: "#0B132B", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "16px", padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ background: "#38BDF8", color: "#050B18", fontWeight: "800", fontSize: "12px", padding: "3px 8px", borderRadius: "6px" }}>ID #{prod.id}</span>
                      <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: 0 }}>{prod.name}</h4>
                    </div>
                    <button onClick={() => {
                      const updated = content.products.filter((_, i) => i !== pIdx);
                      setContent({ ...content, products: updated });
                    }} style={{ background: "rgba(239, 68, 68, 0.2)", border: "1px solid #EF4444", color: "#F87171", borderRadius: "8px", padding: "6px 14px", cursor: "pointer", fontSize: "12px", fontWeight: "600" }}>
                      Delete Product
                    </button>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
                    <InputGroup label="Product Name" value={prod.name} onChange={(e) => {
                      const updated = [...content.products];
                      updated[pIdx].name = e.target.value;
                      setContent({ ...content, products: updated });
                    }} />
                    <InputGroup label="Category" value={prod.cat} onChange={(e) => {
                      const updated = [...content.products];
                      updated[pIdx].cat = e.target.value;
                      setContent({ ...content, products: updated });
                    }} />
                    <InputGroup label="SKU Code" value={prod.sku} onChange={(e) => {
                      const updated = [...content.products];
                      updated[pIdx].sku = e.target.value;
                      setContent({ ...content, products: updated });
                    }} />
                    <InputGroup label="OE Part Number" value={prod.oeNumber} onChange={(e) => {
                      const updated = [...content.products];
                      updated[pIdx].oeNumber = e.target.value;
                      setContent({ ...content, products: updated });
                    }} />
                    <InputGroup label="Image URL / Path" value={prod.image} onChange={(e) => {
                      const updated = [...content.products];
                      updated[pIdx].image = e.target.value;
                      setContent({ ...content, products: updated });
                    }} />
                  </div>

                  {/* USPs EDITOR */}
                  <div style={{ marginTop: "20px" }}>
                    <h5 style={{ fontSize: "13.5px", color: "#38BDF8", margin: "0 0 10px 0" }}>Unique Selling Propositions (USPs)</h5>
                    <TextAreaGroup label="USPs (one per line)" value={prod.usps ? prod.usps.join("\n") : ""} onChange={(e) => {
                      const updated = [...content.products];
                      updated[pIdx].usps = e.target.value.split("\n").filter((s) => s.trim().length > 0);
                      setContent({ ...content, products: updated });
                    }} />
                  </div>

                  {/* SPECS TABLE EDITOR */}
                  <div style={{ marginTop: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                      <h5 style={{ fontSize: "13.5px", color: "#38BDF8", margin: 0 }}>Technical Specifications Table</h5>
                      <button onClick={() => {
                        const updated = [...content.products];
                        updated[pIdx].specs = [...(updated[pIdx].specs || []), { label: "Spec Label", value: "Spec Value" }];
                        setContent({ ...content, products: updated });
                      }} style={{ background: "rgba(56, 189, 248, 0.15)", border: "1px solid #38BDF8", color: "#38BDF8", padding: "4px 10px", borderRadius: "6px", fontSize: "11.5px", cursor: "pointer" }}>
                        + Add Spec Row
                      </button>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {prod.specs && prod.specs.map((spec, sIdx) => (
                        <div key={sIdx} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                          <input type="text" value={spec.label} onChange={(e) => {
                            const updated = [...content.products];
                            updated[pIdx].specs[sIdx].label = e.target.value;
                            setContent({ ...content, products: updated });
                          }} placeholder="Label" style={{ flex: 1, background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "6px 10px", borderRadius: "6px", fontSize: "12.5px" }} />
                          <input type="text" value={spec.value} onChange={(e) => {
                            const updated = [...content.products];
                            updated[pIdx].specs[sIdx].value = e.target.value;
                            setContent({ ...content, products: updated });
                          }} placeholder="Value" style={{ flex: 1, background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "6px 10px", borderRadius: "6px", fontSize: "12.5px" }} />
                          <button onClick={() => {
                            const updated = [...content.products];
                            updated[pIdx].specs = updated[pIdx].specs.filter((_, i) => i !== sIdx);
                            setContent({ ...content, products: updated });
                          }} style={{ background: "rgba(239,68,68,0.2)", border: "1px solid #EF4444", color: "#F87171", borderRadius: "6px", padding: "6px 10px", cursor: "pointer", fontSize: "11.5px" }}>
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 4: QUALITY PAGE EDITOR */}
        {/* ======================================================== */}
        {activeTab === "quality" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <SectionBox title="Quality Page Header">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                <InputGroup label="Eyebrow" value={content.quality.header.eyebrow} onChange={(e) => setContent({ ...content, quality: { ...content.quality, header: { ...content.quality.header, eyebrow: e.target.value } } })} />
                <InputGroup label="Main Title" value={content.quality.header.title} onChange={(e) => setContent({ ...content, quality: { ...content.quality, header: { ...content.quality.header, title: e.target.value } } })} />
              </div>
              <TextAreaGroup label="Header Description" value={content.quality.header.desc} onChange={(e) => setContent({ ...content, quality: { ...content.quality, header: { ...content.quality.header, desc: e.target.value } } })} />
            </SectionBox>

            <SectionBox title="Engineering Standards Cards">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h4 style={{ fontSize: "14px", color: "#38BDF8", margin: 0 }}>Standards ({content.quality.standardsCards.length})</h4>
                <AddButton onClick={() => {
                  const newStd = { title: "New Quality Standard", desc: "Standard details.", icon: "cert" };
                  setContent({ ...content, quality: { ...content.quality, standardsCards: [...content.quality.standardsCards, newStd] } });
                }} label="+ Add Standard Card" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
                {content.quality.standardsCards.map((card, idx) => (
                  <CardEditorBox key={idx} title={`Standard #${idx + 1}: ${card.title}`} onDelete={() => {
                    const updated = content.quality.standardsCards.filter((_, i) => i !== idx);
                    setContent({ ...content, quality: { ...content.quality, standardsCards: updated } });
                  }}>
                    <InputGroup label="Title" value={card.title} onChange={(e) => {
                      const updated = [...content.quality.standardsCards];
                      updated[idx].title = e.target.value;
                      setContent({ ...content, quality: { ...content.quality, standardsCards: updated } });
                    }} />
                    <TextAreaGroup label="Description" value={card.desc} onChange={(e) => {
                      const updated = [...content.quality.standardsCards];
                      updated[idx].desc = e.target.value;
                      setContent({ ...content, quality: { ...content.quality, standardsCards: updated } });
                    }} />
                  </CardEditorBox>
                ))}
              </div>
            </SectionBox>

            <SectionBox title="Testing & Inspection Protocols">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h4 style={{ fontSize: "14px", color: "#38BDF8", margin: 0 }}>Protocols ({content.quality.inspectionProtocols.length})</h4>
                <AddButton onClick={() => {
                  const stepNum = String(content.quality.inspectionProtocols.length + 1).padStart(2, "0");
                  const newProto = { step: stepNum, title: "New Inspection Step", desc: "Inspection procedure description." };
                  setContent({ ...content, quality: { ...content.quality, inspectionProtocols: [...content.quality.inspectionProtocols, newProto] } });
                }} label="+ Add Protocol Step" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
                {content.quality.inspectionProtocols.map((proto, idx) => (
                  <CardEditorBox key={idx} title={`Protocol ${proto.step}: ${proto.title}`} onDelete={() => {
                    const updated = content.quality.inspectionProtocols.filter((_, i) => i !== idx);
                    setContent({ ...content, quality: { ...content.quality, inspectionProtocols: updated } });
                  }}>
                    <InputGroup label="Step Number" value={proto.step} onChange={(e) => {
                      const updated = [...content.quality.inspectionProtocols];
                      updated[idx].step = e.target.value;
                      setContent({ ...content, quality: { ...content.quality, inspectionProtocols: updated } });
                    }} />
                    <InputGroup label="Title" value={proto.title} onChange={(e) => {
                      const updated = [...content.quality.inspectionProtocols];
                      updated[idx].title = e.target.value;
                      setContent({ ...content, quality: { ...content.quality, inspectionProtocols: updated } });
                    }} />
                    <TextAreaGroup label="Description" value={proto.desc} onChange={(e) => {
                      const updated = [...content.quality.inspectionProtocols];
                      updated[idx].desc = e.target.value;
                      setContent({ ...content, quality: { ...content.quality, inspectionProtocols: updated } });
                    }} />
                  </CardEditorBox>
                ))}
              </div>
            </SectionBox>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 5: PARTNER / DEALERSHIP EDITOR */}
        {/* ======================================================== */}
        {activeTab === "partner" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <SectionBox title="Partner Page Header">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                <InputGroup label="Eyebrow" value={content.partner.header.eyebrow} onChange={(e) => setContent({ ...content, partner: { ...content.partner, header: { ...content.partner.header, eyebrow: e.target.value } } })} />
                <InputGroup label="Title" value={content.partner.header.title} onChange={(e) => setContent({ ...content, partner: { ...content.partner, header: { ...content.partner.header, title: e.target.value } } })} />
              </div>
              <TextAreaGroup label="Description" value={content.partner.header.desc} onChange={(e) => setContent({ ...content, partner: { ...content.partner, header: { ...content.partner.header, desc: e.target.value } } })} />
            </SectionBox>

            <SectionBox title="Dealership & Partnership Tiers">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h4 style={{ fontSize: "14px", color: "#38BDF8", margin: 0 }}>Tiers ({content.partner.tiers.length})</h4>
                <AddButton onClick={() => {
                  const newTier = { tier: "New Partnership Tier", tag: "Standard", tagColor: "#38BDF8", benefits: ["Benefit 1", "Benefit 2"] };
                  setContent({ ...content, partner: { ...content.partner, tiers: [...content.partner.tiers, newTier] } });
                }} label="+ Add Dealership Tier" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
                {content.partner.tiers.map((tier, idx) => (
                  <CardEditorBox key={idx} title={`Tier: ${tier.tier}`} onDelete={() => {
                    const updated = content.partner.tiers.filter((_, i) => i !== idx);
                    setContent({ ...content, partner: { ...content.partner, tiers: updated } });
                  }}>
                    <InputGroup label="Tier Name" value={tier.tier} onChange={(e) => {
                      const updated = [...content.partner.tiers];
                      updated[idx].tier = e.target.value;
                      setContent({ ...content, partner: { ...content.partner, tiers: updated } });
                    }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      <InputGroup label="Tag Label" value={tier.tag} onChange={(e) => {
                        const updated = [...content.partner.tiers];
                        updated[idx].tag = e.target.value;
                        setContent({ ...content, partner: { ...content.partner, tiers: updated } });
                      }} />
                      <div>
                        <label style={{ display: "block", fontSize: "12px", color: "#38BDF8", fontWeight: "600", marginBottom: "6px" }}>Tag Badge Color</label>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <input type="color" value={tier.tagColor || "#38BDF8"} onChange={(e) => {
                            const updated = [...content.partner.tiers];
                            updated[idx].tagColor = e.target.value;
                            setContent({ ...content, partner: { ...content.partner, tiers: updated } });
                          }} style={{ width: "36px", height: "36px", border: "none", borderRadius: "6px", cursor: "pointer", background: "none" }} />
                          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>{tier.tagColor || "#38BDF8"}</span>
                        </div>
                      </div>
                    </div>
                    <TextAreaGroup label="Benefits List (one per line)" value={tier.benefits ? tier.benefits.join("\n") : ""} onChange={(e) => {
                      const updated = [...content.partner.tiers];
                      updated[idx].benefits = e.target.value.split("\n").filter((s) => s.trim().length > 0);
                      setContent({ ...content, partner: { ...content.partner, tiers: updated } });
                    }} />
                  </CardEditorBox>
                ))}
              </div>
            </SectionBox>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 6: CONTACT SUBMISSIONS (LEAD MANAGER) */}
        {/* ======================================================== */}
        {activeTab === "leads" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff", margin: 0 }}>Client Inquiries & Quote Requests</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", margin: "4px 0 0 0" }}>Manage, update status, and add internal remarks for all incoming trade leads.</p>
              </div>

              {/* SEARCH & FILTERS */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <input
                  type="text"
                  placeholder="Search name, company, email..."
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  style={{ background: "#0B132B", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", width: "240px" }}
                />

                <select
                  value={leadFilter}
                  onChange={(e) => setLeadFilter(e.target.value)}
                  style={{ background: "#0B132B", border: "1px solid rgba(255,255,255,0.12)", color: "#38BDF8", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="in progress">In Progress</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>

            {filteredLeads.length === 0 ? (
              <div style={{ background: "#0B132B", borderRadius: "16px", padding: "40px", textAlign: "center", color: "rgba(255,255,255,0.5)" }}>
                No contact inquiries match your search criteria.
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {filteredLeads.map((lead) => (
                  <LeadCard key={lead.id} lead={lead} onUpdateStatus={handleUpdateLeadStatus} />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

/* HELPER COMPONENTS FOR CLEAN UI */
function SectionBox({ title, children }) {
  return (
    <div style={{ background: "#070E20", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "16px", padding: "28px" }}>
      <h3 style={{ fontSize: "17px", fontWeight: "800", color: "#38BDF8", marginTop: 0, marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "10px" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function CardEditorBox({ title, onDelete, children }) {
  return (
    <div style={{ background: "#0B132B", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "14px", padding: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#ffffff", margin: 0 }}>{title}</h4>
        {onDelete && (
          <button onClick={onDelete} style={{ background: "rgba(239, 68, 68, 0.2)", border: "1px solid #EF4444", color: "#F87171", borderRadius: "6px", padding: "4px 8px", cursor: "pointer", fontSize: "11px" }}>
            Delete
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

function InputGroup({ label, value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{ fontSize: "12px", color: "#38BDF8", fontWeight: "600" }}>{label}</label>
      <input type="text" value={value || ""} onChange={onChange} style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.12)", color: "#ffffff", padding: "8px 12px", borderRadius: "8px", fontSize: "13px" }} />
    </div>
  );
}

function TextAreaGroup({ label, value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{ fontSize: "12px", color: "#38BDF8", fontWeight: "600" }}>{label}</label>
      <textarea value={value || ""} onChange={onChange} rows={3} style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.12)", color: "#ffffff", padding: "8px 12px", borderRadius: "8px", fontSize: "13px", resize: "vertical" }} />
    </div>
  );
}

function AddButton({ onClick, label }) {
  return (
    <button onClick={onClick} style={{ background: "rgba(56, 189, 248, 0.12)", border: "1px solid #38BDF8", color: "#38BDF8", padding: "8px 16px", borderRadius: "8px", fontSize: "12.5px", fontWeight: "700", cursor: "pointer" }}>
      {label}
    </button>
  );
}

function LeadCard({ lead, onUpdateStatus }) {
  const [remarkText, setRemarkText] = useState(lead.remark || "");
  const [currentStatus, setCurrentStatus] = useState(lead.status || "New");

  const statusColors = {
    New: { bg: "rgba(239, 68, 68, 0.2)", color: "#F87171", border: "#EF4444" },
    Contacted: { bg: "rgba(56, 189, 248, 0.2)", color: "#38BDF8", border: "#38BDF8" },
    "In Progress": { bg: "rgba(245, 158, 11, 0.2)", color: "#FBBF24", border: "#F59E0B" },
    Closed: { bg: "rgba(16, 185, 129, 0.2)", color: "#34D399", border: "#10B981" }
  };

  const styleBadge = statusColors[currentStatus] || statusColors.New;

  return (
    <div style={{ background: "#0B132B", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "16px", padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "14px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: 0 }}>{lead.name}</h4>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>— {lead.company}</span>
          </div>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", margin: "4px 0 0 0" }}>
            Submitted: {new Date(lead.createdAt).toLocaleString()} | Country: {lead.country || "N/A"}
          </p>
        </div>

        {/* STATUS SELECTOR */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>Status:</span>
          <select
            value={currentStatus}
            onChange={(e) => {
              setCurrentStatus(e.target.value);
              onUpdateStatus(lead.id, e.target.value, remarkText);
            }}
            style={{
              background: styleBadge.bg,
              color: styleBadge.color,
              border: `1px solid ${styleBadge.border}`,
              padding: "6px 12px",
              borderRadius: "8px",
              fontSize: "12.5px",
              fontWeight: "700",
              cursor: "pointer"
            }}
          >
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      {/* CONTACT INFO & MESSAGE */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", background: "rgba(0,0,0,0.25)", padding: "16px", borderRadius: "10px", marginBottom: "16px" }}>
        <div>
          <span style={{ fontSize: "11px", textTransform: "uppercase", color: "#38BDF8", fontWeight: "700" }}>Contact Details</span>
          <p style={{ fontSize: "13px", color: "#ffffff", margin: "4px 0 2px 0" }}>Email: <a href={`mailto:${lead.email}`} style={{ color: "#38BDF8" }}>{lead.email}</a></p>
          <p style={{ fontSize: "13px", color: "#ffffff", margin: 0 }}>Phone: <a href={`tel:${lead.phone}`} style={{ color: "#38BDF8" }}>{lead.phone}</a></p>
        </div>
        <div>
          <span style={{ fontSize: "11px", textTransform: "uppercase", color: "#38BDF8", fontWeight: "700" }}>Inquiry Message</span>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", margin: "4px 0 0 0", lineHeight: "1.5" }}>{lead.message}</p>
        </div>
      </div>

      {/* EDITABLE REMARKS / NOTES */}
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: "11px", textTransform: "uppercase", color: "#38BDF8", fontWeight: "700", display: "block", marginBottom: "4px" }}>Admin Remark / Notes</label>
          <input
            type="text"
            value={remarkText}
            onChange={(e) => setRemarkText(e.target.value)}
            placeholder="Add internal notes (e.g., 'Sent catalog on Tuesday...')"
            style={{ width: "100%", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.12)", color: "#ffffff", padding: "8px 12px", borderRadius: "8px", fontSize: "12.5px" }}
          />
        </div>
        <button
          onClick={() => onUpdateStatus(lead.id, currentStatus, remarkText)}
          style={{ background: "rgba(56, 189, 248, 0.15)", border: "1px solid #38BDF8", color: "#38BDF8", padding: "8px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap" }}
        >
          Save Note
        </button>
      </div>
    </div>
  );
}
