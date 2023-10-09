import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
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
                    <p>
                      The rhinoceros gets its name from one of its most notable features: its horns. The word rhinoceros comes from
                      the Greek words rhino meaning “nose” and ceros meaning “horn.” The number of horns that a rhino has varies by
                      species. The two African species (the black rhino and the white rhino) and the Sumatran rhino have two
                      horns, while the Javan rhino and one-horned rhino have one horn.
                    </p>
                  </div>
                </div>
              </IonCol>
              <IonCol size="4"> {/* Use "size" property to specify the width of the column */}
                <div className="row">
                  {/* Content 1 */}
                  <div style={{ maxWidth: '400px' }}>
                    <h2>Rhinoceros</h2>
                    <button></button>
                    <img
                      alt="rhino standing near grass"
                      src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                      width={400}
                    />
                    <p>
                      The rhinoceros gets its name from one of its most notable features: its horns. The word rhinoceros comes from
                      the Greek words rhino meaning “nose” and ceros meaning “horn.” The number of horns that a rhino has varies by
                      species. The two African species (the black rhino and the white rhino) and the Sumatran rhino have two
                      horns, while the Javan rhino and one-horned rhino have one horn.
                    </p>
                  </div>
                </div>
              </IonCol>
          
            </IonRow>
          </IonGrid>
        </IonContent>
        </div>
    </>
  );
};

export default Home;
