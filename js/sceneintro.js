function SCENEIntro()
{//abre SCENEIntro

	this.fundo_intro = new Fundo("imgs/capa_menu.png", 0, 0);
	this.play = new Botao("imgs/play.png", 200, 100, 310, 415);
	this.jh = new Botao("imgs/jh.png", 193, 62, 11, 1);
	this.nw = new Botao("imgs/nw.png", 184, 64, 208, 1);
	this.back = new Botao("imgs/back.png", 50, 50, 732, 12);
	
	this.update = function()
	{//abre update


	};//fecha update

	this.draw = function()
	{//abre draw

		this.fundo_intro.draw();
		this.play.draw();
		this.jh.draw();
		this.nw.draw();
		this.back.draw();
	
	}//fecha draw

	this.mouse_down = function(mouse)
	{//abre mouse down

		if(this.play.clicado(mouse))
		{//abre if

			currentScene = SCENES.LEVEL01;

		}//fecha if
		
		if(this.jh.clicado(mouse))
		{
			window.open("http://www.facebook.com/JoystickHouse");
		}
		
		if(this.nw.clicado(mouse))
		{
			window.open("http://nwdesign.com.br");
		}

	}//fecha mouse down

	this.key_down=function(key)
	{
  
	};
  
	this.mouse_up=function(mouse)
	{
  
	};
  
	this.key_up=function(key)
	{
  
	};

}//fecha SCENEIntro