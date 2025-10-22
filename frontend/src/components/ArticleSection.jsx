import React from "react";
import { Card } from "./ui/card";
import { MapPin, Calendar, TrendingUp } from "lucide-react";

const ArticleSection = () => {
  return (
    <div className="article-container">
      {/* Header */}
      <header className="article-header">
        <div className="header-content">
          <h1 className="site-title">TechNews Internacional</h1>
          <p className="header-date">Octubre 2024</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <TrendingUp size={16} />
            <span>Exposición 2024</span>
          </div>
          <h1 className="hero-title">
            Las mejores marcas presentaron sus modelos de demostración en Latinoamérica y el Magreb
          </h1>
          <p className="hero-subtitle">
            Durante octubre, una exposición internacional de dispositivos electrónicos recorrió Costa Rica, Argentina, Marruecos y Honduras, mostrando lo último en tecnología y liberando productos de demostración a precios reducidos.
          </p>
          <div className="hero-meta">
            <div className="meta-item">
              <Calendar size={16} />
              <span>Octubre 2024</span>
            </div>
            <div className="meta-item">
              <MapPin size={16} />
              <span>4 países</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1731834452954-bef04f4d3342?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGV4cG98ZW58MHx8fHwxNzYxMTM3MjM5fDA&ixlib=rb-4.1.0&q=85" 
            alt="Exposición de dispositivos electrónicos"
          />
        </div>
      </section>

      {/* Main Article */}
      <article className="article-main">
        <div className="article-content">
          <section className="article-intro">
            <p className="intro-text">
              La exposición internacional de dispositivos electrónicos marcó un hito en octubre de 2024, llevando lo último en tecnología a cuatro países clave. El evento no solo permitió a los visitantes conocer los productos más innovadores del mercado, sino que también ofreció la oportunidad única de adquirir modelos de demostración a precios significativamente reducidos.
            </p>
          </section>

          {/* Costa Rica Section */}
          <section className="country-section">
            <div className="country-header">
              <h2 className="country-title">🇨🇷 Costa Rica</h2>
            </div>
            <div className="country-content">
              <div className="country-text">
                <p>
                  San José fue la primera sede de esta exposición innovadora. Durante tres días, las principales marcas internacionales presentaron sus últimas líneas de smartphones, laptops de última generación, y dispositivos inteligentes para el hogar.
                </p>
                <p>
                  Los visitantes costarricenses mostraron especial interés en los nuevos modelos de tablets de alta gama y relojes inteligentes con funciones de salud avanzadas. Al finalizar el evento, más de 200 unidades de demostración fueron liberadas al público con descuentos de hasta el 40%.
                </p>
              </div>
              <div className="country-image">
                <img 
                  src="https://images.unsplash.com/photo-1690264695857-344a45b8b3ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbGFwdG9wfGVufDB8fHx8MTc2MTEzNzI0N3ww&ixlib=rb-4.1.0&q=85" 
                  alt="Dispositivos en Costa Rica"
                />
              </div>
            </div>
          </section>

          {/* Argentina Section */}
          <section className="country-section">
            <div className="country-header">
              <h2 className="country-title">🇦🇷 Argentina</h2>
            </div>
            <div className="country-content reverse">
              <div className="country-image">
                <img 
                  src="https://images.unsplash.com/photo-1690264695884-f62022341c8f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxzbWFydHBob25lJTIwbGFwdG9wfGVufDB8fHx8MTc2MTEzNzI0N3ww&ixlib=rb-4.1.0&q=85" 
                  alt="Tecnología en Argentina"
                />
              </div>
              <div className="country-text">
                <p>
                  Buenos Aires acogió la segunda parada de la exposición con una respuesta abrumadora del público. El Centro de Convenciones recibió a más de 15,000 visitantes durante los cuatro días del evento.
                </p>
                <p>
                  Las laptops para gaming y los dispositivos de audio premium fueron las estrellas del show. Marcas reconocidas presentaron sus líneas más recientes, incluyendo notebooks ultraligeros y sistemas de sonido envolvente. La venta de productos de demostración superó todas las expectativas, agotándose en las primeras horas del último día.
                </p>
              </div>
            </div>
          </section>

          {/* Morocco Section */}
          <section className="country-section">
            <div className="country-header">
              <h2 className="country-title">🇲🇦 Marruecos</h2>
            </div>
            <div className="country-content">
              <div className="country-text">
                <p>
                  Casablanca se sumó a la ruta de la exposición, marcando la primera vez que un evento de esta magnitud llegaba al norte de África con este formato. La respuesta del público marroquí fue excepcional.
                </p>
                <p>
                  Los dispositivos más solicitados fueron los smartphones de gama media-alta y los scooters eléctricos, productos que han ganado popularidad en la región. La exposición también incluyó demostraciones en vivo de sistemas de domótica y dispositivos IoT. Más de 300 unidades de demostración encontraron nuevos propietarios a precios accesibles.
                </p>
              </div>
              <div className="country-image">
                <img 
                  src="https://images.pexels.com/photos/34354932/pexels-photo-34354932.jpeg" 
                  alt="Electrónica en Marruecos"
                />
              </div>
            </div>
          </section>

          {/* Honduras Section */}
          <section className="country-section">
            <div className="country-header">
              <h2 className="country-title">🇭🇳 Honduras</h2>
            </div>
            <div className="country-content reverse">
              <div className="country-image">
                <img 
                  src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg" 
                  alt="Tecnología en Honduras"
                />
              </div>
              <div className="country-text">
                <p>
                  Tegucigalpa cerró el circuito de la exposición con una participación masiva. Los hondureños mostraron gran entusiasmo por conocer las últimas innovaciones tecnológicas presentadas por marcas globales.
                </p>
                <p>
                  Los productos más populares incluyeron tablets educativas, laptops para trabajo remoto y dispositivos de fotografía. La exposición coincidió con el creciente interés local por la transformación digital, lo que generó un ambiente de gran expectativa. Los modelos de demostración se agotaron rápidamente, beneficiando a cientos de compradores que buscaban tecnología de calidad a precios competitivos.
                </p>
              </div>
            </div>
          </section>

          {/* Products Showcase */}
          <section className="products-section">
            <h2 className="section-title">Productos Destacados de la Exposición</h2>
            <div className="products-grid">
              <Card className="product-card">
                <img 
                  src="https://images.pexels.com/photos/28428273/pexels-photo-28428273.jpeg" 
                  alt="Setup de productos"
                />
                <div className="product-info">
                  <h3>Smartphones de Última Generación</h3>
                  <p>Modelos flagship con cámaras avanzadas, procesadores de alto rendimiento y pantallas AMOLED.</p>
                </div>
              </Card>
              <Card className="product-card">
                <img 
                  src="https://images.pexels.com/photos/18966475/pexels-photo-18966475.jpeg" 
                  alt="Computadoras"
                />
                <div className="product-info">
                  <h3>Laptops Ultraligeras</h3>
                  <p>Equipos portátiles con baterías de larga duración, ideales para profesionales y estudiantes.</p>
                </div>
              </Card>
              <Card className="product-card">
                <img 
                  src="https://images.unsplash.com/photo-1740727263760-d220d5a90d9f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxlbGVjdHJvbmljcyUyMGV4cG98ZW58MHx8fHwxNzYxMTM3MjM5fDA&ixlib=rb-4.1.0&q=85" 
                  alt="Exposición general"
                />
                <div className="product-info">
                  <h3>Dispositivos Inteligentes</h3>
                  <p>Relojes, auriculares y accesorios IoT que revolucionan la experiencia tecnológica diaria.</p>
                </div>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <Card className="conclusion-card">
              <h2 className="conclusion-title">Un Evento que Marcó Historia</h2>
              <p>
                La exposición internacional de dispositivos electrónicos de octubre 2024 demostró que existe un enorme apetito por la tecnología de calidad en estos mercados. La combinación de demostraciones en vivo, acceso a productos premium y la oportunidad de adquirir modelos de demostración a precios reducidos creó una experiencia única para miles de visitantes.
              </p>
              <p>
                Este tipo de eventos no solo acercan la tecnología al público, sino que también generan oportunidades económicas y fomentan la adopción de innovaciones que mejoran la calidad de vida. Los organizadores ya han confirmado que planean expandir el circuito a más países en 2025, prometiendo traer aún más marcas y productos exclusivos.
              </p>
            </Card>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="article-footer">
        <div className="footer-content">
          <p>© 2024 TechNews Internacional. Todos los derechos reservados.</p>
          <p className="footer-note">Artículo informativo sobre exposición internacional de electrónicos</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticleSection;