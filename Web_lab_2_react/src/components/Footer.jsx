import React, { useState, useEffect } from "react";
function Footer() {
  const [systemInfo, setSystemInfo] = useState({
    platform: "",
    userAgent: "",
    deviceMemory: "",
    language: "",
  });

  useEffect(() => {
    const info = {
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      deviceMemory: navigator.deviceMemory,
      language: navigator.language,
    };

    localStorage.setItem("systemInfo", JSON.stringify(info));

    const storedData = localStorage.getItem("systemInfo");
    if (storedData) {
      setSystemInfo(JSON.parse(storedData));
    }
  }, []);
  return (
    <footer className="text-center py-6 text-slate-500 text-xs tracking-wide">
      <p>Резюме оновлено: 29.10.2026 </p>
      <div>
        <strong>Інформація про систему:</strong>
        <br></br>
        <span>ОС: {systemInfo.platform}</span> |
        <span>Браузер: {systemInfo.userAgent}</span> |
        <span>Мова: {systemInfo.language}</span> |
        <span>Пам'ять пристрою: {systemInfo.deviceMemory}</span>
      </div>
    </footer>
  );
}
export default Footer;
