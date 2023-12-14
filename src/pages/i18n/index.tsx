import ExcelJs from "exceljs";
import { useState } from "react";

const wb = new ExcelJs.Workbook();

export default function Main() {
  const [value, setValue] = useState<any>({});

  function handleFileSelect(evt: any) {
    var file = evt.target.files[0];

    var reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const buffer = reader.result as Buffer;
      let result = {};
      wb.xlsx.load(buffer).then((workbook) => {
        console.log(workbook, "workbook instance");
        workbook.eachSheet((sheet, id) => {
          sheet.eachRow((row, rowIndex) => {
            if (rowIndex === 1) return;
            const s = Array.from(row.values as any);
            const key = s[1] as string;
            const value = s[2];
            result = {
              ...result,
              [key]: value,
            };
          });
          setValue(result);
        });
      });
    };
  }

  return (
    <main>
      <input
        type="file"
        onChange={(e) => {
          handleFileSelect(e);
        }}
      />
      <div>{JSON.stringify(value, undefined, 2)}</div>
    </main>
  );
}
