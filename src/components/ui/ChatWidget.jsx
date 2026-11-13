import { useEffect, useRef, useState } from "react";

const CHAT_URL = import.meta.env.VITE_CHAT_URL;
const GREETING = { role: "assistant", content: "hi! ask me about rohit's projects, stack or experience." };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [msgs, open]);

  if (!CHAT_URL) return null; // hidden until the chat worker URL is configured

  async function send(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    const next = [...msgs, { role: "user", content: text }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const r = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(1) }), // drop the local greeting
      });
      const d = await r.json();
      setMsgs([...next, { role: "assistant", content: d.reply ?? d.error ?? "something went wrong." }]);
    } catch {
      setMsgs([...next, { role: "assistant", content: "can't reach the assistant right now." }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="chat">
      {open && (
        <div className="chat-panel panel" role="dialog" aria-label="chat assistant">
          <div className="panel-titlebar static">
            <span className="panel-dots">
              <span className="window-dot red" />
              <span className="window-dot yellow" />
              <span className="window-dot green" />
            </span>
            <span className="panel-title">ask-rohit.ai</span>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="close chat">×</button>
          </div>
          <div className="chat-log">
            {msgs.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role}`}>{m.content}</div>
            ))}
            {busy && <div className="chat-msg assistant">…</div>}
            <div ref={endRef} />
          </div>
          <form className="chat-form" onSubmit={send}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={400}
              placeholder="ask something…"
              aria-label="message"
            />
            <button type="submit" disabled={busy}>→</button>
          </form>
        </div>
      )}
      <button className="chat-fab" onClick={() => setOpen((o) => !o)} aria-label="toggle chat">
        {open ? "×" : "</> ask"}
      </button>
    </div>
  );
}
