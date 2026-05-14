"use client";

import { useState } from "react";

interface EmailContactProps {
  email: string;
  className?: string;
  label?: string;
}

export default function EmailContact({ email, className, label = "Email" }: EmailContactProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.location.href = `mailto:${email}`;
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-label={`Copy ${email} and open email client`}
      title={copied ? "Email copied" : `Copy ${email}`}
    >
      {copied ? "Copied" : label}
    </button>
  );
}