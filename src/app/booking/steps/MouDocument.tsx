import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { BookingFormData } from "../types";

const styles = StyleSheet.create({
  page: { 
    padding: 40, 
    fontFamily: "Helvetica", 
    fontSize: 11, 
    color: "#333333" 
  },
  header: { 
    marginBottom: 30, 
    borderBottomWidth: 1, 
    borderBottomColor: "#eeeeee", 
    paddingBottom: 15 
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#1a1a1a", 
    marginBottom: 5 
  },
  subtitle: { 
    fontSize: 12, 
    color: "#666666" 
  },
  section: { 
    marginBottom: 20 
  },
  sectionTitle: { 
    fontSize: 14, 
    fontWeight: "bold", 
    backgroundColor: "#f5f5f5", 
    padding: 6, 
    marginBottom: 10,
    color: "#1a1a1a"
  },
  row: { 
    flexDirection: "row", 
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#f9f9f9",
    paddingBottom: 4
  },
  label: { 
    width: 150, 
    fontWeight: "bold", 
    color: "#555555" 
  },
  value: { 
    flex: 1, 
    color: "#1a1a1a" 
  },
  footer: { 
    marginTop: 40, 
    paddingTop: 20, 
    borderTopWidth: 1, 
    borderTopColor: "#eeeeee", 
    textAlign: "center", 
    color: "#888888", 
    fontSize: 9 
  }
});

const DECORATION_LABELS: Record<string, string> = {
  "sablon-manual": "Sablon Manual",
  "sablon-dtf": "Sablon Digital (DTF)",
  bordir: "Bordir Komputer",
  "woven-label": "Woven Label",
};

export const MouDocument = ({ formData }: { formData: BookingFormData }) => {
  const grandTotal =
    Object.values(formData.sizeBreakdown.pria).reduce((s, v) => s + v, 0) +
    Object.values(formData.sizeBreakdown.wanita).reduce((s, v) => s + v, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>KonveksiPro</Text>
          <Text style={styles.subtitle}>Memorandum of Understanding (MoU) / Quotation Request</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Informasi Klien</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Nama PIC</Text>
            <Text style={styles.value}>{formData.fullName || "-"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Brand/Perusahaan</Text>
            <Text style={styles.value}>{formData.brandName || "-"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{formData.email || "-"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>WhatsApp</Text>
            <Text style={styles.value}>{formData.whatsapp || "-"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Alamat Pengiriman</Text>
            <Text style={styles.value}>{formData.shippingAddress || "-"}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Detail Produk & Desain</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Jenis Pakaian</Text>
            <Text style={styles.value}>{formData.garmentType || "-"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Bahan Kain</Text>
            <Text style={styles.value}>{formData.fabricPreference || "-"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Warna Utama</Text>
            <Text style={styles.value}>{formData.primaryColor || "-"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Jenis Dekorasi</Text>
            <Text style={styles.value}>
              {formData.decorationTypes.length > 0
                ? formData.decorationTypes.map((d) => DECORATION_LABELS[d] || d).join(", ")
                : "-"}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Titik Detail</Text>
            <Text style={styles.value}>{formData.decorationPoints || "-"}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Kuantitas & Timeline</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Total Pesanan</Text>
            <Text style={styles.value}>{grandTotal > 0 ? `${grandTotal} pcs` : formData.moqRange}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Budget per Pcs</Text>
            <Text style={styles.value}>{formData.budgetPerPcs ? `Rp ${formData.budgetPerPcs}` : "Tidak ditentukan"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Deadline</Text>
            <Text style={styles.value}>
              {formData.deadline
                ? new Date(formData.deadline).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Belum ditentukan"}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Catatan Tambahan</Text>
            <Text style={styles.value}>{formData.additionalNotes || "-"}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text>Dokumen ini di-generate secara otomatis oleh sistem KonveksiPro pada {new Date().toLocaleDateString("id-ID")}.</Text>
          <Text>Silakan simpan dokumen ini sebagai referensi pesanan dan komunikasi lanjutan.</Text>
        </View>
      </Page>
    </Document>
  );
};
