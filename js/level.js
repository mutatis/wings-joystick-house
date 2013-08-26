function SceneLevel()
{//abre level

	this.fundo1 = new Fundo_move("imgs/background.png")
	this.fundo2 = new Fundo("imgs/tela_controler.png", 0, 0)
	this.fundo3 = new Fundo("imgs/terra.png", 0, 0)
	this.roda = new Aviao ("imgs/roda.png", 107, 112, 155, 490);
	this.roda2 = new Radar("imgs/radar.png", 183, 182, 14, 427);
	this.mira = new Mira("imgs/alvo_mouse.png");
	this.tiro1 = new Tela_tiro("imgs/tela.png", 800, 600, 0, 0);
	this.tiro2 = new Tela_tiro("imgs/tiro2.png", 800, 600, 0, 0);
	this.tiro3 = new Tela_tiro("imgs/tiro3.png", 800, 600, 0, 0);
	this.tiro4 = new Tela_tiro("imgs/tiro4.png", 800, 600, 0, 0);
	this.tiro5 = new Tela_tiro("imgs/tiro5.png", 800, 600, 0, 0);
	this.jh = new Botao("imgs/jh.png", 193, 62, 11, 1);
	this.nw = new Botao("imgs/nw.png", 184, 64, 208, 1);
	this.back = new Botao("imgs/back.png", 50, 50, 732, 12);
  	this.vida = 6;
	this.balas = 15;
	this.tiros = true;
	this.pontos = 0;
	this.aviao_list = new Array();

	this.Aviao = function()
	{
		var aviao1 = new Alvos("imgs/alvo.png", 430, 101);
		var aviao2 = new Alvos("imgs/alvo.png", 430, 101);
		var aviao3 = new Alvos("imgs/alvo.png", 430, 101);

		this.aviao_list.push(aviao1);
		this.aviao_list.push(aviao2);
		this.aviao_list.push(aviao3);
	}

	this.Aviao();
  
	this.update=function()
	{//abre update
		tempoSeg++
		for(var i = 0; i < this.aviao_list.length; i++)
		{
			this.aviao_list[i].Update();
			this.pontos = this.aviao_list[i].pontos;
		}
		this.fundo1.update();
		this.mira.update();
		
		if(this.balas <= 0)
		{
			this.tiros = false;
		}
			
	};//fecha update
  
	this.draw = function()
	{//abre draw
		
		this.fundo1.draw();
		this.fundo3.draw();
		for(var i = 0; i < this.aviao_list.length; i++)
		{
			this.aviao_list[i].Draw();
		}
		this.mira.draw();
		this.fundo2.draw();
		this.roda.draw();
		this.roda2.draw();
		this.jh.draw();
		this.nw.draw();
		this.back.draw();

		for(var i = 0; i < this.aviao_list.length; i++)
		{		
			//this.pontos = this.aviao_list[i].pontos;

			if(this.aviao_list[i].clico == false && this.aviao_list[i].visible == false)
			{
				this.vida += -1;
				this.aviao_list[i].clico = true;			
			}
			if(this.vida <= 0)
			{
				currentScene = SCENES.END;
				this.aviao_list[i].pontos = 0;
				this.aviao_list[i].mortes = 0;
				this.vida = 6;
				this.balas = 15;
				this.tiros = true;
			}
			if(this.pontos >= 300)
			{
				currentScene = SCENES.END1;
				this.aviao_list[i].pontos = 0;
				this.aviao_list[i].mortes = 0;
				this.vida = 6;
				this.balas = 15;
				this.tiros = true;
			}
			
			if(this.aviao_list[i].mortes >= 5)
			{
				currentScene = SCENES.END2;
				this.aviao_list[i].pontos = 0;
				this.vida = 6;
				this.aviao_list[i].mortes = 0;
				this.balas = 15;
				this.tiros = true;
			}
		}		
			screen.font = "50px Comic Sans MS";
			screen.fillStyle = "#000000";
			screen.fillText(this.pontos, 630, 515);

				if(this.vida == 5)
			{
				this.tiro1.draw();
			}
			if(this.vida == 4)
			{
				this.tiro2.draw()	
			}
			if(this.vida == 3)
			{
				this.tiro3.draw()	
			}
			if(this.vida == 2)
			{
				this.tiro4.draw()	
			}
			if(this.vida == 1)
			{
				this.tiro5.draw()	
			}
	};//fecha draw
	
	this.mouse_move=function(mouse)
	{
		this.mira.mouse_move(mouse);
	}
  
	this.mouse_down=function(mouse)
	{//abre mouse down
		
		this.balas -= 1;
		
		for(var i = 0; i < this.aviao_list.length; i++)
		{
			if(this.tiros == true)
			{
				this.aviao_list[i].mouse_down(mouse);
				//this.pontos += 10;
			}
		 }
		 if(this.jh.clicado(mouse))
			{
				window.open("http://www.facebook.com/JoystickHouse");
			}
			
			if(this.nw.clicado(mouse))
			{
				window.open("http://nwdesign.com.br");
			}
			
			if(this.back.clicado(mouse))
			{
				this.aviao_list[i].pontos = 0;
				this.aviao_list[i].mortes = 0;
				this.vida = 6;
				this.balas = 15;
				this.tiros = true;
				currentScene = SCENES.INTRO;
			}
	};//fecha mouse down
	  
	this.key_down=function(key)
	{//abre key down
    
  
	};//fecha key down
  
      
	this.mouse_up=function(mouse)
	{//abre mouse up
  
  
	};//fecha mouse up
  
	this.key_up=function(key)
	{//abre key up
  
  
	};//fecha key up

				function Collide(x1, y1, w1, h1, x2, y2, w2, h2)
				{//abre Collide
					if((x1+w1<x2)//se rect1 esquerda rect2
					||(x1>x2+w2)//se rect1 direita rect2
					||(y1+h1<y2)//se rect1 acima rect2
					||(y1>y2+h2))//se rect1 abaixo rect2
					{//abre if
						return false;//nao colidiu
					}//fecha if
					else
					{//abre else
						return true;//colidiu
					}//fecha else
				}//fecha Collide


  
}//fecha creditos