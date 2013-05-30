function SceneLevel()
{//abre level

	this.alvo1 = new Alvos("imgs/aviao.png", 215, 50);
	this.alvo2 = new Alvos("imgs/aviao.png", 215, 50);
	this.fundo1 = new Fundo_move("imgs/background.png")
	this.fundo2 = new Fundo("imgs/tela_controler.png", 0, 0)
	this.fundo3 = new Fundo("imgs/terra.png", 0, 0)
	this.roda = new Aviao ("imgs/roda.png", 107, 112, 142, 507);
	this.roda2 = new Radar("imgs/radar.png", 183, 182, 1, 441);
  
	this.update=function()
	{//abre update
		tempoSeg++
		this.alvo1.Update();
		this.alvo2.Update();
		this.fundo1.update();
	};//fecha update
  
	this.draw = function()
	{//abre draw
		
		this.fundo1.draw();
		this.fundo3.draw();
		this.alvo1.Draw();
		this.alvo2.Draw();
		this.fundo2.draw();
		this.roda.draw();
		this.roda2.draw();
		screen.font = "50px Comic Sans MS";
		screen.fillStyle = "#ffffff";
		screen.fillText( this.alvo1.pontos + this.alvo2.pontos, 670, 550);

	};//fecha draw
  
  
	this.mouse_down=function(mouse)
	{//abre mouse down
		
		this.alvo1.mouse_down(mouse);
		this.alvo2.mouse_down(mouse);
		 
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