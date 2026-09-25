import { InputHTMLAttributes, LabelHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldClasses =
  "w-full min-h-[44px] rounded-xl border border-border bg-surface px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-tint";

export function Label({ children, ...rest }: LabelHTMLAttributes<HTMLLabelElement> & { children: string }) {
  return (
    <label className="mb-1.5 block text-sm font-medium text-heading" {...rest}>
      {children}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={fieldClasses} {...props} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`${fieldClasses} min-h-[140px] resize-y`} {...props} />;
}
