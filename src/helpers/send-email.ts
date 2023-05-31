const subject = "Tagion.org inquiry";
const mailto = "info@tagion.org";

export const sendEmail = () => {
  const link = `mailto:${mailto}?subject=${subject}`;
  window.location.href = link;
};
