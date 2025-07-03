import Layout from '../components/Layout';

export default function Visit() {
  return (
    <Layout gradient="#E5F3FF">
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>
          Plan Your Visit
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.6 }}>
          Find everything you need to know about visiting MathsWorld, including hours, directions, and tickets.
        </p>
      </div>
    </Layout>
  );
}
