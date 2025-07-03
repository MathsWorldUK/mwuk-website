import Layout from '../components/Layout';

export default function Exhibits() {
  return (
    <Layout gradient="#F3E5FF">
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>
          Our Exhibits
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.6 }}>
          Explore our collection of interactive mathematical exhibits designed to inspire curiosity and learning.
        </p>
      </div>
    </Layout>
  );
}
