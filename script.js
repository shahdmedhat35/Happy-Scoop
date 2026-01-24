const items = [
  { id: 'box1', bg_color: '#feced8', head_color: '#fb6884', sc_color: '#ff9cae',circle_color:'rgba(255, 156, 174,.3)', image: 'images/image (4).png' },
  { id: 'box2', bg_color: '#f8fddc', head_color: '#739541', sc_color: '#82a749',circle_color:'rgba(183, 202, 107, 0.3)', image: 'images/image (2).png' },
  { id: 'box3', bg_color: '#e5dac9', head_color: '#ce9e6d', sc_color: '#d3c1a1',circle_color:'rgba(171, 131, 82, 0.3)', image: 'images/image (3).png' },
  { id: 'box4', bg_color: '#e6d7d1', head_color: '#5f2407', sc_color: '#5f2407',circle_color:'rgba(165, 83, 59, 0.3)', image: 'images/image (1).png' }
];

const body = document.body;
const circle = document.getElementById('corner_circle');
const head = document.getElementById('head');
const p = document.querySelector('#info p');
const bg = document.querySelector('.bg');
const img = document.getElementById('bimg');
const overlay = document.querySelector('.overlay');
const defaultImage = img.src;
items.forEach(item => {
  const element = document.getElementById(item.id);
  if (!element) return;

  element.addEventListener('mouseenter', () => {
    img.src = item.image;
    body.style.backgroundColor = item.bg_color;
    head.style.color = item.head_color;
    p.style.color = item.sc_color;
    circle.style.backgroundColor = item.sc_color;
    bg.style.backgroundColor =item.circle_color;
    bg.style.boxShadow = `0px 4px 7px 3px ${item.sc_color}`; 
  });
  element.addEventListener('mouseleave', () => {
    img.src = defaultImage;
    body.style.backgroundColor = '';
    head.style.color = '';
    p.style.color = '';
    circle.style.backgroundColor = '';
    bg.style.backgroundColor = '';
    bg.style.boxShadow = '';
    
  });

});