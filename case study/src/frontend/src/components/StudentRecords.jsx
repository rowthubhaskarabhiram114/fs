import { useEffect, useState } from 'react';
import { fetchStudents } from '../services/api.js';

export default function StudentRecords() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents()
      .then((res) => setStudents(res.data?.data || []))
      .catch((err) => setError(err.response?.data?.message || err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="note">Loading records. The first request can take up to 30 seconds if the server was idle.</p>;
  }
  if (error) {
    return <p className="note error">Could not load student records: {error}</p>;
  }
  if (students.length === 0) {
    return <p className="note">No student records found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Regd. No</th>
          <th>Student Name</th>
          <th>Branch</th>
          <th>Section</th>
          <th>CGPA</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.regNo}>
            <td>{s.regNo}</td>
            <td>{s.name}</td>
            <td>{s.branch}</td>
            <td>{s.section}</td>
            <td>{s.cgpa?.toFixed(1)}</td>
            <td><span className="badge">Active / Verified</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
