"use client";

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const CvDownload = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const handleDownload = () => {
    const pdfUrl = "https://jobvision.ir/cv/64318124-232936";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.click();
  };

  return (
    <Button variant="flat" color="primary" onClick={handleDownload}>
      دانلود رزومه
    </Button>
  );
};

export default CvDownload;
