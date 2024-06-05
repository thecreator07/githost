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

  let currentSlide = 0; // Index of the currently displayed slide
  slideContainer.css('overflow', 'hidden')
  // Function to show the specified slide
  function showSlide(slideIndex) {
    slides.eq(currentSlide).fadeOut(500); // Fade out current slide (adjust speed)
    slides.eq(slideIndex).fadeIn(500);  // Fade in new slide (adjust speed)
    currentSlide = slideIndex;
  }

  // Previous button click handler
  prevBtn.click(function () {
    //  prevBtn.css()
    const prevSlide = (currentSlide - 1 + slides[0].children.length) % slides[0].children.length; // Handle looping
    showSlide(prevSlide);
  });

  // Next button click handler
  nextBtn.click(function () {
    nextBtn.css('border', '1px solid #FF3147')
    const nextSlide = (currentSlide + 1) % slides[0].children.length;
    showSlide(nextSlide);
  });



  $('.Card').mouseenter(function () {
    console.log(this)
    // Target the specific image and cardshow elements within the hovered Card
    const image = $(this).find('.image');
    const card = $(this).find('.Cardshow');
    // Fade out the image and fade in the card on the hovered Card
    image.fadeOut(500);
    card.fadeIn(500);
  });

  $('.Card').mouseleave(() => {
    const image = $(this).find('.image');
    const card = $(this).find('.Cardshow');
    image.fadeIn(500)
    card.fadeOut(500)
  })



  //project
  const projectPic = $(".projectPic")
  // console.log(projectPic)
  const height = projectPic.find('img').first().height()
  // console.log(height)
  $(".ProjectData").css('height', `${height}px`)
  $(".projectlist").css('height', `${height / 3}px`)




  const imageElement = $('.projectPic img');
  const imageSources = {
    "list1": "static/2.png", // Replace with your actual image source
    "list2": "static/1.png", // Replace with your actual image source
    "list3": "static/image/image.png"
  };

  // Click event handler for projectlist elements
  $('.projectlist').click(function () {
    const listId = $(this).attr('id'); // Get the ID of the clicked projectlist element
    const newSource = imageSources[listId]; // Look up the new image source based on ID
    //remove .active from all lists
    $('.projectlist').removeClass('active');

    // Adding the 'active' class ( for only slected class name) to the clicked element
    $(this).addClass('active');
    if (newSource) {
      imageElement.attr('src', newSource); // Update the image source
    }
  });









})

