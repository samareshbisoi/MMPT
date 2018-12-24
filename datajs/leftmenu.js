function show_tab(tone,ttwo,bone,btwo) {
	//alert(tone);
	$(ttwo).hide();	
	$(tone).show();	
	
	//alert();
	$(btwo).removeClass('active');
	//$(tone).removeClass('active');
	$(bone).addClass('active');
}


$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var menu = '<li><a href="index.html" class="close-panel"><img src="images/icons/red/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="about.html" class="close-panel"><img src="images/icons/red/mobile.png" alt="" title="" /><span>About Us</span></a></li><li><a href="weekly-schedule.html" class="close-panel"><img src="images/icons/red/features.png" alt="" title="" /><span>Service Times</span></a></li><li><a href="announcement.html" class="close-panel"><img src="images/icons/red/blog.png" alt="" title="" /><span>Announcements</span></a></li><li><a href="featured_photo.html" class="close-panel"><img src="images/icons/red/photos.png" alt="" title="" /><span>Photo Gallery</span></a></li><li><a href="service_video.html" class="close-panel"><img src="images/icons/red/video.png" alt="" title="" /><span>Service Video</span></a></li><li><a href="director-message.html" class="close-panel"><img src="images/icons/red/user.png" alt="" title="" /><span>Director Message</span></a></li>	<li><a href="support.html" class="close-panel"><img src="images/icons/red/supporticon.png" alt="" title="" /><span>Support</span></a></li>   <li><a href="what-we-believe.html" class="close-panel"><img src="images/icons/red/books.png" alt="" title="" /><span>What We Believe</span></a></li><li><a href="contact.html" class="close-panel"><img src="images/icons/red/contact.png" alt="" title="" /><span>Contact</span></a></li>';
		
		$("#sidemenu").append(menu);
		
	});