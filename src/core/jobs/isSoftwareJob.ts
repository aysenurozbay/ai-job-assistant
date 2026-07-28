const softwareKeywords = [
  "react",
  "react native",
  "frontend",
  "front-end",
  "javascript",
  "typescript",
  "node",
  "full stack",
  "fullstack",
  "mobile",
  "android",
  "ios",
  "flutter",
  "developer",
  "engineer",
  "software",
  "web",
  "product owner",
  "business analyst",
];

export function isSoftwareJob(
  title: string,

  description: string,
): boolean {
  const normalizedTitle = title.toLowerCase();
  const text = `

${title}

${description}

`.toLowerCase();

  return softwareKeywords.some((keyword) =>
    text.includes(keyword.toLowerCase()),
  );
}
