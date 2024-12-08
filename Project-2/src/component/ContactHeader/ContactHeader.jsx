import styles from "./ContactHeader.module.css";

export const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>Contact Us</h1>
      <p>Let&apos;s connect  </p>
    </div>
  );
};
export default ContactHeader;
