import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  code: string;
  label?: string;
  href?: string;
}

const CopyButton = ({ code, label, href = "http://app.ac/XtwdyDM23" }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard permissions must not prevent opening the coupon link.
    }
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer nofollow" onClick={handleCopy} className="copy-btn" title={`${code} 복사`}>
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {copied ? "복사됨!" : label || code}
    </a>
  );
};

export default CopyButton;
