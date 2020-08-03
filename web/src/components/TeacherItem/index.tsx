import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

export function TeacherItem() {
  return (<article className="teacher-item">
  <header>
    <img
      src="https://avatars2.githubusercontent.com/u/4248081?s=400&u=98a643ad7f90c7950d9311e4b5a762fe77af8ada&v=4"
      alt="Filipe Deschamps"
    />
    <div>
      <strong>Filipe Deschamps</strong>
      <span>Química</span>
    </div>
  </header>

  <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>{' '}
      Vitae adipisci fugit delectus culpa corrupti exercitationem enim,
      neque rerum iusto porro est provident soluta. Ducimus amet illo
      hic ipsam, nobis ex.
    </p>

  <footer>
    <p>
      Preço/hora
      <strong>R$ 80,00</strong>
    </p>

    <button type="button">
      <img src={whatsappIcon} alt="Whatsapp" />
      Entrar em contato
    </button>
  </footer>
</article>)
}