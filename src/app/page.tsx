import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout gradient="#FFE5E5">
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>
          Welcome to MathsWorld
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.6 }}>
          Discover the wonder of mathematics through interactive exhibits and engaging experiences.
        </p>
      </div>
    </Layout>
  );
}
