export default function Ubicacion() {
  return (
    <section className="ubicacion-mapa" id="ubicacion">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895463!2d-58.38381!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb8d3f3f3f%3A0x1!2sGral.%20Juan%20Domingo%20Per%C3%B3n%20315%2C%20CABA!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación - Gral. Juan Domingo Perón 315, CABA"
      />
    </section>
  );
}