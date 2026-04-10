import { BikeProvider } from "./context/BikeContext";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <BikeProvider>
          {children}
        </BikeProvider>
      </body>
    </html>
  );
}