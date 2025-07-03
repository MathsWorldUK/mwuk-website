import Layout from '../components/Layout';

export default function Page() {
  return (
    <Layout gradient="#FFF3E5">
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>
          Support MathsWorld
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.6 }}>
          Help us continue our mission of making mathematics accessible to everyone. Your support makes a difference.
        </p>
      </div>
    </Layout>
  );
}
