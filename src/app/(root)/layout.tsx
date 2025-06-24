import StreamClientProvider from "@/components/provider/StreamClientProvider";

function Layout({ children }: { children: React.ReactNode }) {
  return <StreamClientProvider>{children}</StreamClientProvider>;
}
export default Layout;