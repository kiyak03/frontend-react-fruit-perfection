import React from 'react';
import Product from './Product';
import './App.css';

function App() {
  return (
    <main>
      <Product
        image="https://www.plusonline.nl/sites/plusonline/files/citroen_1.jpg"
        title="Citroen"
        description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
      />
      <article className="product">
        <img src="https://www.plusonline.nl/sites/plusonline/files/citroen_1.jpg" alt="Citroenen"/>
        <h2 className="product-name">Limoen</h2>
        <p className="product-description">
          Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten (Wijnruitfamilie).
          Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen.
        </p>
      </article>
      <article className="product">
        <img src="https://www.plusonline.nl/sites/plusonline/files/citroen_1.jpg" alt="Citroenen"/>
        <h2 className="product-name">IJsblokjes</h2>
        <p className="product-description">
          Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje. Het wordt gemaakt in
          een diepvriezer door water in een plastic vorm te laten bevriezen.
        </p>
      </article>
    </main>
  );
}

export default App;
