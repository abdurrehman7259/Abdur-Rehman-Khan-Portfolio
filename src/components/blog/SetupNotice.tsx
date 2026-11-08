export function SetupNotice() {
  return (
    <div className="glass-panel mx-auto max-w-xl rounded-xl p-6 text-center text-sm text-cyber-muted">
      Firebase is not configured. Copy <code className="text-cyber-accent">.env.example</code> to{" "}
      <code className="text-cyber-accent">.env.local</code> and fill in your Firebase web app keys.
    </div>
  );
}
