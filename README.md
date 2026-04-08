# 💈 BarberShop Z - Estilo & Tradição

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=for-the-badge&logo=github)
![Version](https://img.shields.io/badge/Versão-1.2.0-blue?style=for-the-badge)
![Commits](https://img.shields.io/badge/Ritmo-1%20Commit%20por%20Dia-gold?style=for-the-badge&logo=git)
![Tech](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-blue?style=for-the-badge)

> 🎯 **Landing page premium para barbearia** com design elegante, modo claro/escuro e experiência imersiva.

---

## 🖼️ Demonstração do Projeto

![Preview do Projeto](./img/img-demo.png)

**🔗 Acesse o projeto:** [https://gustavodeoliveiradev.github.io/barbershop-z/](https://gustavodeoliveiradev.github.io/barbershop-z/)

---

## ✨ Funcionalidades Implementadas

| Recurso | Descrição | Status |
|---------|-----------|--------|
| 🎨 **Design Responsivo** | Layout adaptável para mobile, tablet e desktop | ✅ |
| 🌓 **Dark/Light Mode** | Alternância de tema com persistência no localStorage | ✅ |
| ✨ **Animações de Scroll** | Efeitos de revelação suaves ao rolar a página | ✅ |
| 🍔 **Menu Mobile** | Navegação hambúrguer com auto-close ao clicar nos links | ✅ |
| 🎯 **CSS Grid & Flexbox** | Grids responsivos para serviços e depoimentos | ✅ |
| 🖼️ **Efeito de Ruído** | Textura sutil de noise overlay para sofisticação visual | ✅ |
| 📝 **Formulário de Contato** | Validação e feedback visual no envio de mensagens | ✅ |
| 🗺️ **Mapa Integrado** | Google Maps com filtros dinâmicos por tema | ✅ |

---

## 🚀 Sobre o Projeto

Este é um projeto de estudo de **Front-end avançado** focado em criar uma experiência de usuário de alto padrão para uma barbearia moderna. O objetivo é combinar **design elegante**, **micro-interações refinadas** e **código limpo** em uma landing page profissional.

### 🎨 Identidade Visual
- **Cores:** Paleta sofisticada em preto, dourado e branco
- **Tipografia:** Playfair Display (títulos) + Montserrat (corpo)
- **Estilo:** Visual premium com inspiração em barbearias clássicas britânicas

---

## 📅 Cronograma de Evolução (7 Dias)

- [x] **Dia 0:** Setup inicial e deploy no GitHub Pages
- [x] **Dia 1:** Refatoração de Elite (Tipografia Premium & Noise Texture)
- [x] **Dia 2:** Seção de Serviços com CSS Grid e Glow Effects
- [x] **Dia 3:** Interatividade com JS (Menu Auto-close & Scroll Reveal)
- [x] **Dia 4:** Implementação de Dark/Light Mode e Variáveis CSS ✅
- [ ] **Dia 5:** Seção de Depoimentos Expandida & Galeria de Fotos
- [ ] **Dia 6:** Sistema de Agendamento & Integração com WhatsApp
- [ ] **Dia 7:** Otimização de Performance, SEO e Acessibilidade

---

## 🛠️ Tecnologias Utilizadas

### Front-end Core
- **HTML5 Semântico** - Estrutura acessível e SEO-friendly
- **CSS3 Moderno** - Variáveis CSS, Flexbox, Grid, `clamp()` e animações
- **JavaScript Vanilla** - Interatividade sem dependências externas

### Fonts & Icons
- **Google Fonts:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) & [Montserrat](https://fonts.google.com/specimen/Montserrat)
- **Font Awesome 6.5.1** - Ícones vetoriais escaláveis

### Recursos Especiais
- **Intersection Observer API** - Animações de scroll performáticas
- **localStorage API** - Persistência de preferências do usuário
- **CSS Custom Properties** - Temas dinâmicos e manutenção facilitada

---

## 📁 Estrutura do Projeto

```
barbershop-z/
│
├── index.html          # Estrutura principal da página
├── styles.css          # Estilos globais e responsividade
├── scripts.js          # Interatividade e lógica do tema
├── README.md           # Documentação do projeto
│
└── img/
    ├── hero.jpg        # Imagem de fundo do banner principal
    └── img-demo.png    # Screenshot para preview
```

---

## 🎯 Destaques Técnicos

### 🌓 Sistema de Temas
```javascript
// Persistência inteligente de preferências
const savedTheme = localStorage.getItem('theme');
body.classList.toggle('light-mode', savedTheme === 'light');
```

### ✨ Animações Performáticas
```css
/* Scroll reveal com GPU acceleration */
.service-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.service-card.show {
    opacity: 1;
    transform: translateY(0);
}
```

### 📱 Mobile-First
- Menu hambúrguer com transições suaves
- Toggle de tema reposicionado para fácil acesso
- Grid adaptativo que mantém proporções em qualquer tela

---

## 🚧 Próximas Atualizações

- [ ] **Galeria de Cortes** - Carousel de fotos dos trabalhos realizados
- [ ] **Integração WhatsApp** - Botão flutuante e agendamento direto
- [ ] **Sistema de Preços Dinâmico** - Cards interativos com mais detalhes
- [ ] **Acessibilidade (A11y)** - Suporte completo a leitores de tela
- [ ] **PWA** - Transformar em Progressive Web App instalável

---

## ✍️ Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/gustavodeoliveiradev">
        <b>Gustavo Oliveira</b>
      </a>
      <br>
      <sub>Desenvolvedor Front-end</sub>
      <br>
      <sub>🎯 Focado em evoluir 1% todos os dias</sub>
    </td>
  </tr>
</table>

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  💈 <strong>BarberShop Z</strong> - Estilo e Tradição para o Homem Moderno 💈
  <br>
  <sub>Desde 2026 elevando o padrão da barbearia contemporânea</sub>
</p>
