import StudentRecords from './components/StudentRecords.jsx';

export default function App() {
  return (
    <main className="page">
      <section className="panel">
        <h1>Student Records Portal</h1>
        <p className="sub">ANITS - Dept. of CSE (AI &amp; ML)</p>
        <StudentRecords />
      </section>
    </main>
  );
}
