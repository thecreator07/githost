$(document).ready(function () {

  //contact popup
  $("#Contact").click(() => {
    $(".popside").fadeIn(1000)
    $("#PopUp").css('opacity', '1')
    $("body").css('background', 'white')
    $("#PopUp").fadeIn(1000)
  })

  const PopUp = $("#PopUp")
  $(document).mouseup((e) => {
    console.log(PopUp.is(e.target))
    if (!PopUp.is(e.target) && PopUp.has(e.target).length === 0) {
      $(".popside").fadeOut(1000)
      PopUp.css('opacity', '0.5')
      PopUp.fadeOut(1000)
    }
  })


  //slider
  const slideContainer = $('.slider-container');
  const slides = slideContainer.find('.Card');
  const prevBtn = $('.prev-btn');
  const nextBtn = $('.next-btn');

  let currentSlide = 0; 
  slideContainer.css('overflow', 'hidden')

  function showSlide(slideIndex) {
    slides.eq(currentSlide).fadeOut(500); 
    slides.eq(slideIndex).fadeIn(500);  
    currentSlide = slideIndex;
  }


  prevBtn.click(function () {
  
    const prevSlide = (currentSlide - 1 + slides[0].children.length) % slides[0].children.length;
    showSlide(prevSlide);
  });

 
  nextBtn.click(function () {
    nextBtn.css('border', '1px solid #FF3147')
    const nextSlide = (currentSlide + 1) % slides[0].children.length;
    showSlide(nextSlide);
  });



  $('.Card').mouseenter(function () {
    console.log(this)
   
    const image = $(this).find('.image');
    const card = $(this).find('.Cardshow');
    
    image.fadeOut(500);
    card.fadeIn(500);
  });

  $('.Card').mouseleave(() => {
    const image = $(this).find('.image');
    const card = $(this).find('.Cardshow');
    image.fadeIn(500)
    card.fadeOut(500)
  })




  const projectPic = $(".projectPic")
  
  const height = projectPic.find('img').first().height()
 
  $(".ProjectData").css('height', `${height}px`)
  $(".projectlist").css('height', `${height / 3}px`)




  const imageElement = $('.projectPic img');
  const imageSources = {
    "list1": "static/2.png", 
    "list2": "static/1.png", 
    "list3": "static/image/image.png"
  };


  $('.projectlist').click(function () {
    const listId = $(this).attr('id'); 
    const newSource = imageSources[listId]; 

    $('.projectlist').removeClass('active');

   
    $(this).addClass('active');
    if (newSource) {
      imageElement.attr('src', newSource); 
    }
  });









})

