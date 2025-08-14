import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <footer className="footer">
        <p>&copy; 2025 Ququmboy Naslchilik Parranda. {t("rightsReserved")}</p>
      </footer>
    </div>
  );
};

export default Footer;
