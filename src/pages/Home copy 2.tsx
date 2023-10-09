import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState, useEffect } from 'react';

import './Home.css';
import '../api'


const fetchProducts = async (limit: number, offset: number) => {
  try {
    // Simulate an API request or data retrieval
    const response = await fetch(`https://api.example.com/products?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    throw error;
  }
};

const Home: React.FC = () => {
  const [productName, setProductName] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const cdnLink: string = "https://terangnesia.sgp1.cdn.digitaloceanspaces.com/";
  const [products, setProducts] = useState<any[]>([]);
  const [limit] = useState<number>(10);
  const [offset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        await new Promise<void>((resolve) => setTimeout(resolve, 1000));
        // Assuming fetchProducts is a function returning a Promise
        const responseData = await fetchProducts(limit, offset);
        setProducts(responseData.data);
        setLoading(false);
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    };

    fetchDataFromAPI();
  }, [limit, offset]);
  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="container">
        <IonContent fullscreen={true} className="ion-padding">
          
       
          <IonGrid>
          <h1>MEGASIA</h1>
          <p>Produk - produk UMKM Indonesia</p>
            <IonRow>
            products.map((product) = (
              <IonCol size="4"> {/* Use "size" property to specify the width of the column */}
                <div className="row">
                  {/* Content 1 */}
                  <div style={{ maxWidth: '400px' }}>
                    <h2>Rhinoceros</h2>
                    <img
                      alt="rhino standing near grass"
                      src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                      width={400}
                    />
                    <h3>dd</h3>
                    <p>By : <a>| Lokasi : </a></p>
                  </div>
                </div>
              </IonCol>
              ))
          
            </IonRow>
          </IonGrid>
        </IonContent>
        </div>
    </>
  );
};

export default Home;
