let blogs = []

function addBlog() {

    let title = document.getElementById('input-blog-title').value;
    let content = document.getElementById('input-blog-content').value;
    let techno = document.getElementsByName('techno');
    let image = document.getElementById('input-blog-image').files[0];
    let x=0;
    let tech= Array();

    for(let cek of techno){
      if(cek.checked == true){
        tech[x]=cek.value; x++
      }
    }

    console.log(tech)

    image = URL.createObjectURL(image)

    let blog = {
        title: title,
        content: content,
        tech: tech,
        image: image,
        postedAt: Date()
    }

    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let blogContainer = document.getElementById('contents')
    console.log(blogs)

    blogContainer.innerHTML = 
    `<div class="blog-list-item">
      <div class="blog-image">
          <img src="assets/blog-img.jpg" alt="" />
      </div>
      <div class="item-content">
          <h3>
            <a style="text-decoration:none; color:black" 
            href="blog-detail.html" target="_blank">Dumbways Mobile App 2021</a>
          </h3>
          <p style="color: grey">Durasi : 3 Bulan</p>
          <p>App that used for Dumbways student, it was deployed and can downloaded on play store. 
            happy download</p>
      </div>
      <div class="item-logo">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-java"></i>
      </div>
      <div class="item-button">
          <a href="#" class="btn-edit">Edit</a>
          <a href="#" class="btn-post">Delete</a>
    </div>
    </div>
    <div class="blog-list-item">
      <div class="blog-image">
          <img src="assets/blog-img.jpg" alt="" />
      </div>
      <div class="item-content">
          <h3>
            <a style="text-decoration:none; color:black" 
            href="blog-detail.html" target="_blank">Dumbways Mobile App 2021</a>
          </h3>
          <p style="color: grey">Durasi : 3 Bulan</p>
          <p>App that used for Dumbways student, it was deployed and can downloaded on play store. 
            happy download</p>
      </div>
      <div class="item-logo">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-java"></i>
      </div>
      <div class="item-button">
          <a href="#" class="btn-edit">Edit</a>
          <a href="#" class="btn-post">Delete</a>
      </div>
    </div>
    <div class="blog-list-item">
      <div class="blog-image">
          <img src="assets/blog-img.jpg" alt="" />
      </div>
      <div class="item-content">
          <h3>
            <a style="text-decoration:none; color:black" 
            href="blog-detail.html" target="_blank">Dumbways Mobile App 2021</a>
          </h3>
          <p style="color: grey">Durasi : 3 Bulan</p>
          <p>App that used for Dumbways student, it was deployed and can downloaded on play store. 
            happy download</p>
      </div>
      <div class="item-logo">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-java"></i>
      </div>
      <div class="item-button">
          <a href="#" class="btn-edit">Edit</a>
          <a href="#" class="btn-post">Delete</a>
      </div>
    </div>
    <div class="blog-list-item">
      <div class="blog-image">
          <img src="assets/blog-img.jpg" alt="" />
      </div>
      <div class="item-content">
          <h3>
            <a style="text-decoration:none; color:black" 
            href="blog-detail.html" target="_blank">Dumbways Mobile App 2021</a>
          </h3>
          <p style="color: grey">Durasi : 3 Bulan</p>
          <p>App that used for Dumbways student, it was deployed and can downloaded on play store. 
            happy download</p>
      </div>
      <div class="item-logo">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-java"></i>
      </div>
      <div class="item-button">
          <a href="#" class="btn-edit">Edit</a>
          <a href="#" class="btn-post">Delete</a>
      </div>
    </div>
    <div class="blog-list-item">
      <div class="blog-image">
          <img src="assets/blog-img.jpg" alt="" />
      </div>
      <div class="item-content">
          <h3>
            <a style="text-decoration:none; color:black" 
            href="blog-detail.html" target="_blank">Dumbways Mobile App 2021</a>
          </h3>
          <p style="color: grey">Durasi : 3 Bulan</p>
          <p>App that used for Dumbways student, it was deployed and can downloaded on play store. 
            happy download</p>
      </div>
      <div class="item-logo">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-java"></i>
      </div>
      <div class="item-button">
          <a href="#" class="btn-edit">Edit</a>
          <a href="#" class="btn-post">Delete</a>
      </div>
    </div>`

    for(let i = 0; i < blogs.length; i++) {
        blogContainer.innerHTML += 
        `<div class="blog-list-item">
          <div class="blog-image">
              <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="item-content">
              <h3>
                <a style="text-decoration:none; color:black" 
                href="blog-detail.html" target="_blank">${blogs[i].title}</a>
              </h3>
              <p style="color: grey">Durasi : ${blogs[i].postedAt}</p>
              <p>${blogs[i].content}</p>
          </div>
          <div class="item-logo">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-java"></i>
          </div>
          <div class="item-button">
              <a href="#" class="btn-edit">Edit</a>
              <a href="#" class="btn-post">Delete</a>
          </div>
        </div>`
    }
}