import React from "react";

interface SafeMarkdownProps {
  text: string;
}

export function SafeMarkdown({ text }: SafeMarkdownProps) {
  if (!text) return null;

  const lines = text.split(/\r?\n/);
  const elements: React.ReactNode[] = [];
  let currentListItems: React.ReactNode[] = [];
  let listKey = 0;

  const flushList = () => {
    if (currentListItems.length > 0) {
      elements.push(
        <ul key={`list-${listKey++}`} className="list-disc list-inside my-3 space-y-1.5 pl-2">
          {currentListItems}
        </ul>
      );
      currentListItems = [];
    }
  };

  const parseInlineStyles = (content: string): React.ReactNode[] => {
    // Simple HTML entities escape to prevent raw markup injection
    const escaped = content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Split by ** for bold
    const parts = escaped.split(/\*\*([\s\S]*?)\*\*/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return (
          <strong key={i} className="font-bold text-amber-gold">
            {part}
          </strong>
        );
      }

      // Handle italics with *
      const italicParts = part.split(/\*([\s\S]*?)\*/g);
      if (italicParts.length > 1) {
        return (
          <React.Fragment key={i}>
            {italicParts.map((subPart, j) => {
              if (j % 2 === 1) {
                return (
                  <em key={j} className="italic text-lavender">
                    {subPart}
                  </em>
                );
              }
              return subPart;
            })}
          </React.Fragment>
        );
      }

      return part;
    });
  };

  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx].trim();

    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith("#### ")) {
      flushList();
      elements.push(
        <h4 key={idx} className="text-md font-semibold text-starlight mt-4 mb-2 font-display">
          {parseInlineStyles(line.slice(5))}
        </h4>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={idx} className="text-lg font-bold text-amber-gold mt-5 mb-2 font-display">
          {parseInlineStyles(line.slice(4))}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={idx} className="text-xl font-bold text-starlight mt-6 mb-3 font-display border-b border-border pb-1">
          {parseInlineStyles(line.slice(3))}
        </h2>
      );
    } else if (line.startsWith("# ")) {
      flushList();
      elements.push(
        <h1 key={idx} className="text-2xl font-bold text-gradient-cosmic mt-7 mb-4 font-display">
          {parseInlineStyles(line.slice(2))}
        </h1>
      );
    } else if (line.startsWith("* ") || line.startsWith("- ")) {
      const bulletContent = line.slice(2);
      currentListItems.push(
        <li key={idx} className="text-sm leading-relaxed text-lavender">
          {parseInlineStyles(bulletContent)}
        </li>
      );
    } else {
      flushList();
      elements.push(
        <p key={idx} className="text-sm leading-relaxed text-lavender mb-3">
          {parseInlineStyles(line)}
        </p>
      );
    }
  }

  flushList();

  return <div className="space-y-1">{elements}</div>;
}
