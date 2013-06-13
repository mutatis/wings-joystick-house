function SCENEIntro()
{//abre SCENEIntro

	this.fundo_intro = new Fundo("imgs/capa_menu.png", 0, 0);
	this.play = new Botao("imgs/play.png", 200, 100, 310, 415);
	
	this.update = function()
	{//abre update


	};//fecha update

	this.draw = function()
	{//abre draw

		this.fundo_intro.draw();
		this.play.draw();
	
	}//fecha draw

	this.mouse_down = function(mouse)
	{//abre mouse down

		if(this.play.clicado(mouse))
		{//abre if

			currentScene = SCENES.LEVEL01;

		}//fecha if

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