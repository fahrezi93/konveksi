"use client";

import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MouDocument } from "./MouDocument";
import type { BookingFormData } from "../types";
import { FileDown, Loader2 } from "lucide-react";

export default function MouDownloadButton({
  formData,
}: {
  formData: BookingFormData;
}) {
  const [isClient, setIsClient] = useState(false);

  // Mencegah hydration error saat SSR dengan memastikan render hanyak di sisi klien
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <button
        disabled
        className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-orange-50 text-orange-600/50 border border-orange-200/50 text-sm font-medium w-full sm:w-auto"
      >
        <Loader2 className="size-4 animate-spin" />
        Menyiapkan Dokumen...
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<MouDocument formData={formData} />}
      fileName={`MoU_KonveksiPro_${formData.brandName || "Client"}.pdf`}
      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 text-sm font-medium hover:bg-orange-100 transition-colors w-full sm:w-auto"
    >
      {/* react-pdf typeings explicitly require children as function */}
      {/* @ts-ignore */}
      {({ loading }) =>
        loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Menyiapkan Dokumen...
          </>
        ) : (
          <>
            <FileDown className="size-4" />
            Download Surat MoU (PDF)
          </>
        )
      }
    </PDFDownloadLink>
  );
}
