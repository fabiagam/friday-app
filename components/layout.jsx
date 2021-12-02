/*************************************
 * Page Layout
 * @file: components/layout.jsx
 * @author: James Abiagam
 ************************************/
export default function Layout({ content, footer }) {
  return (
    <>
      <main>
        {content}
        {footer}
      </main>
    </>
  );
}
