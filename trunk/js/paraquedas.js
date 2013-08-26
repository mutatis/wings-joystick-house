function Paraquedas(file, tamanho_w, tamanho_h, posicao_x, posicao_y)
{//abre 

        this.img = new Image();
        this.img.src = file;
        
        this.visible = false;
		
		//this.pontos = pontos;
        
        this.posicao_x_dst = posicao_x;
        this.posicao_y_dst = posicao_y;
        
        this.scale_x = 0.2;
        this.scale_y = 0.2;
        
        this.tamanho_w_src = tamanho_w;
        this.tamanho_h_src = tamanho_h;
        
        this.tamanho_w_dst = 300;
        this.tamanho_h_dst = 300;
		
	this.clico = false;
		
	this.velocidade_x = 5;
	this.velocidade_y = 2;
        
        this.posicao_x_src = 0;
        this.posicao_y_src = 0;
		
	this.mortos = 0;
        
        this.current_frame = 0;
        this.frames = 4;
        
        this.fps = 8;//frames por segundo
        this.time_per_frame = 1000/this.fps;
        this.setFPS = function(newFPS)
        {//abre setFPS
        
                this.fps = newFPS;
                this.time_per_frame = 1000/this.fps;
                
        }//fecha setFPS
        
        this.delta_time = 0;
        this.acumulated_delta_time = 0
        this.last_draw_time = 0;
        
        this.update = function()
        {//abre update
			
		if(this.visible == true)
		{
		      this.posicao_y_dst += this.velocidade_y
		}
		
		if(this.posicao_x_dst >= SCREEN_HEIGHT)
		{
	               this.visible = false;
		}

                if(this.mortos >= 5)
                {
                        this.mortos = 0;
                }
                
        }//fecha update
        
        this.draw = function()//funcao desenhar (draw)
        {//abre draw
              
                if(this.visible)
                screen.drawImage(this.img,
                                        this.tamanho_w_src*this.current_frame,
                                        this.posicao_y_src,
                                        this.tamanho_w_src,
                                        this.tamanho_h_src,
                                        this.posicao_x_dst,
                                        this.posicao_y_dst,
                                        this.tamanho_w_dst*this.scale_x,
                                        this.tamanho_h_dst*this.scale_y);
                                        
                this.delta_time = Date.now() - this.last_draw_time;
                
                if(this.acumulated_delta_time > this.time_per_frame)
                {//abre if
                        
                        this.acumulated_delta_time = 0;
                        this.current_frame++;
                        if(this.current_frame >= this.frames)
                        {//abre if
                        
                                this.current_frame = 0;
                                
                        }//fecha if
                        
                }//fecha if
                else
                {//abre else
                
                        this.acumulated_delta_time += this.delta_time;
                        
                }//fecha if
                
                this.last_draw_time = Date.now();
                
        }//fecha draw
		
		this.mouse_down = function(mouse)
		{
	
			if(Collide(mouse.x-10, mouse.y-11, 1, 1, this.posicao_x_dst, this.posicao_y_dst, this.tamanho_w_dst*this.scale_x, this.tamanho_h_dst*this.scale_y))	
			{	
				if(this.visible) 
				{
					this.visible = false;
					this.clico = true;
					this.mortos += 1;
				}
			}
	
		}
        
}//fecha 