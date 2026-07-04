const ERROR_PAGE_CONFIG = {
  title: "This page didn't load",
  heading: "This page didn't load",
  description: "Something went wrong on our end. You can try refreshing or head back home.",
  primaryButtonText: "Try again",
  secondaryButtonText: "Go home",
};

export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${ERROR_PAGE_CONFIG.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #0A0518; color: #F8F9FA; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2.5rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; box-shadow: 0 0 40px rgba(107,33,168,0.15); }
      h1 { font-size: 1.5rem; margin: 0 0 0.75rem; font-family: Cinzel, serif; color: #FFB347; }
      p { color: rgba(255,255,255,0.65); margin: 0 0 1.75rem; font-size: 14px; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.65rem 1.25rem; border-radius: 99px; font-size: 14px; font-weight: 600; cursor: pointer; text-decoration: none; border: 1px solid transparent; transition: all 0.2s ease; }
      .primary { background: linear-gradient(135deg,#FF6B2B,#FFB347); color: #fff; box-shadow: 0 0 20px rgba(255,107,43,0.3); }
      .primary:hover { opacity: 0.9; transform: scale(1.03); }
      .secondary { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.8); border-color: rgba(255,255,255,0.14); }
      .secondary:hover { color: #fff; border-color: rgba(255,107,43,0.4); }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>${ERROR_PAGE_CONFIG.heading}</h1>
      <p>${ERROR_PAGE_CONFIG.description}</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">${ERROR_PAGE_CONFIG.primaryButtonText}</button>
        <a class="secondary" href="/">${ERROR_PAGE_CONFIG.secondaryButtonText}</a>
      </div>
    </div>
  </body>
</html>`;
}
