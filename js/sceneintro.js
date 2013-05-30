function SCENEIntro()
{//abre SCENEIntro
	this.update = function()
	{//abre update


	};//fecha update

	this.draw = function()
	{//abre draw

		screen.font = "20px Comic Sans MS";
		screen.fillStyle = "#000000";
		screen.fillText("INTRO", 20, 20);

	}//fecha draw

	this.mouse_down = function(mouse)
	{//abre mouse down

		if(this.botao_cred.clicado(mouse))
		{//abre if

			currentScene = SCENES.CREDITS;

		}//fecha if

		if(this.botao_play.clicado(mouse))
		{//abre if

			currentScene = SCENES.LEVEL01;

		}//fecha if

		if(this.botao_tuto.clicado(mouse))
		{//abre if

			currentScene = SCENES.TUTORIAL;

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