/**
 * Verbatim copy of the Privacy Policy text shown inside the Sheltr app
 * (shltr_frontend/lib/features/shell/presentation/legal_content.dart —
 * `_privacyTenant` / `_privacyLandlord`, rendered by `legal_document_screen.dart`
 * under the "Your data & privacy" screen). Do not edit the wording here without
 * also updating the app copy — the two are meant to stay identical.
 *
 * Same tiny markup as the app's parser: `## ` starts a heading, `* ` starts a
 * bullet, a lone `@CONTACT` line starts a block of `Label: value` contact rows,
 * and blank lines separate paragraphs.
 */

export const privacyTenant = `
At Sheltr, we respect your privacy and are committed to protecting the information you provide while using our platform.

We may collect information such as your name, mobile number, email address, account information, search preferences, and activity on Sheltr.

## We use this information to:
* Create and manage your account
* Help you discover suitable rental properties
* Connect you with landlords when you choose to contact them
* Provide customer support
* Improve our services and app experience
* Maintain the security and proper functioning of Sheltr

When you choose to contact a landlord, relevant information may be shared with the landlord to facilitate the connection.

We do not sell your personal information.

If you have any questions about your data or privacy, please contact us:

@CONTACT
Email: findyoursheltr@gmail.com
Phone: +91 84313 99800
`;

export const privacyLandlord = `
At Sheltr, we respect your privacy and are committed to protecting the information you provide while using our platform.

We may collect information such as your name, mobile number, email address, account information, property details, listing information, and activity on Sheltr.

## We use this information to:
* Create and manage your landlord account
* Create, publish and manage your property listings
* Display your properties to potential tenants
* Connect you with interested tenants
* Provide access to your landlord dashboard and services
* Provide customer support
* Improve our services and app experience
* Maintain the security and proper functioning of Sheltr

When a tenant chooses to contact you regarding your property, relevant information may be shared to facilitate the connection.

We do not sell your personal information.

If you have any questions about your data or privacy, please contact us:

@CONTACT
Email: rentyoursheltr@gmail.com
Phone: +91 84313 99800
`;

export type LegalBlock =
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "contact"; rows: { label: string; value: string }[] };

/**
 * Ports the app's `_parseLegalBlocks` line-by-line pass exactly, so the
 * website renders the same document structure as the app for identical
 * source text.
 */
export function parseLegalBlocks(raw: string): LegalBlock[] {
  const blocks: LegalBlock[] = [];
  let paragraphLines: string[] = [];
  let bulletItems: string[] = [];

  const flushParagraph = () => {
    if (paragraphLines.length === 0) return;
    blocks.push({ kind: "paragraph", text: paragraphLines.join(" ") });
    paragraphLines = [];
  };

  const flushBullets = () => {
    if (bulletItems.length === 0) return;
    blocks.push({ kind: "bullets", items: bulletItems });
    bulletItems = [];
  };

  const lines = raw.split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (line.length === 0) {
      flushParagraph();
      flushBullets();
    } else if (line.startsWith("## ")) {
      flushParagraph();
      flushBullets();
      blocks.push({ kind: "heading", text: line.slice(3).trim() });
    } else if (line.startsWith("* ")) {
      flushParagraph();
      bulletItems.push(line.slice(2).trim());
    } else if (line === "@CONTACT") {
      flushParagraph();
      flushBullets();
      const rows: { label: string; value: string }[] = [];
      let j = i + 1;
      while (j < lines.length && lines[j].trim().length > 0) {
        const parts = lines[j].split(":");
        if (parts.length >= 2) {
          rows.push({ label: parts[0].trim(), value: parts.slice(1).join(":").trim() });
        }
        j++;
      }
      blocks.push({ kind: "contact", rows });
      i = j;
      continue;
    } else {
      flushBullets();
      paragraphLines.push(line);
    }
    i++;
  }
  flushParagraph();
  flushBullets();
  return blocks;
}
