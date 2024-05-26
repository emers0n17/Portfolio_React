import "../../Estilos/estiloContacto.css";
import React, { useState } from 'react';

function FormularioContacto() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [avaliacao, setAvaliacao] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Substitua o código abaixo pelo envio real do email
    alert(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}\nAvaliação: ${avaliacao} estrelas`);
  };

  return (
    <div className="contacto_container">
      <form onSubmit={handleSubmit}>
        <h2>Contacte-me</h2>
        <label>
          Nome:
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Mensagem:
          <textarea 
            value={mensagem} 
            onChange={(e) => setMensagem(e.target.value)} 
            required 
          />
        </label>
        <label>
          Avaliação:
          <select value={avaliacao} onChange={(e) => setAvaliacao(e.target.value)}>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>{star} Estrela{star > 1 ? 's' : ''}</option>
            ))}
          </select>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function Rodape() {
    return (
      <div className="rodape">
        <p>&copy; 2024 Emerson Covane.</p>
        <ul className="">
          <li style={{ color: 'white' }} className="">
            Contactos
          </li>
          <li className="">
            <a href="https://github.com/emers0n17" rel="noopener noreferrer" target="_blank">GitHub</a>
          </li>
          <li className="">
            <a href="https://www.instagram.com/emerson_cov/" rel="noopener noreferrer" target="_blank">Instagram</a>
          </li>
          <li className="">
            <a href="https://web.facebook.com/emerson.covane.3/" rel="noopener noreferrer" target="_blank">Facebook</a>
          </li>
          <li className="">
            <a href="https://mz.linkedin.com/in/emerson-covane-867937275" rel="noopener noreferrer" target="_blank">Linkedin</a>
          </li>
        </ul>
        <ul className="list-inline">
          <li className="">
            <a href="#">Inicio</a>
          </li>
          <li className="">
            <a href="#">Sobre</a>
          </li>
          <li className="">
            <a href="#">Habilidades</a>
          </li>
          <li className="">
            <a href="#">Road Map</a>
          </li>
          <li className="">
            <a href="#">Contactos</a>
          </li>
        </ul>
      </div>
    );
  }

function Contacto() {
  return (
    <div id="contacto_fundo" className="contacto_fundo">
      <FormularioContacto />
      <Rodape />
    </div>
  );
}

export default Contacto;
