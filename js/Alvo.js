function Alvos(file, tamanho_w, tamanho_h)
{//abre 

		this.para1 = new Paraquedas("imgs/para_quedas.png", 100, 100, 0, 0);

        this.img = new Image();
        this.img.src = file;
        
        this.visible = true;
		
		this.posicao_x = Math.floor((Math.random()*(800-tamanho_w)+1));
		this.posicao_y = Math.floor((Math.random()*(600-tamanho_h)+1));
		this.tempo_visto = 100;
		this.tempo_apagado = 100;
		
		this.pontos = 0;
        
        this.posicao_x_dst = this.posicao_x;
        this.posicao_y_dst = this.posicao_y;
        
        this.scale_x = 0.4;
        this.scale_y = 0.4;
        
        this.tamanho_w_src = tamanho_w;
        this.tamanho_h_src = tamanho_h;
        
        this.tamanho_w_dst = this.tamanho_w_src;
        this.tamanho_h_dst = this.tamanho_h_src;
        
        this.posicao_x_src = 0;
        this.posicao_y_src = 0;
		
		this.clico = false;
		
		this.mortes = 0;
        
        this.current_frame = 0;
        this.frames = 8;
        
        this.fps = 16;//frames por segundo
        this.time_per_frame = 1000/this.fps;
        this.setFPS = function(newFPS)
        {//abre setFPS
        
                this.fps = newFPS;
                this.time_per_frame = 1000/this.fps;
                
        }//fecha setFPS
        
        this.delta_time = 0;
        this.acumulated_delta_time = 0
        this.last_draw_time = 0;
        
        this.Update = function()
        {//abre update
		
			this.para1.update();
			
			this.mortes = this.para1.mortos;

			if(this.para1.mortos >= 5)
			{
				this.para1.mortos = 0;
			}
		
		//verifica se o tempo em q o aviao esta invisivel se este tempo for menor q o tempoSeg ele aparece denovo
		if(tempoSeg > this.tempo_apagado)
		{
			this.visible = true;
			this.tempo_visto = tempoSeg + Math.floor((Math.random()*100+50));
			this.tempo_apagado = tempoSeg + Math.floor((Math.random()*150+101));
			this.clico = false;
		} 
		//verifica se o tempo em q o aviao esta visivel se este tempo for menor q o tempoSeg ele some
		if(tempoSeg > this.tempo_visto)
		{
			this.visible = false;
			this.posicao_x_dst = Math.floor((Math.random()*(800-this.tamanho_w_dst))+1);
			this.posicao_y_dst = Math.floor((Math.random()*(600-this.tamanho_h_dst))+1);
		}
		
		//verifica a posicao y do aviao	em cima
		if(this.posicao_y_dst <= 67)
		{
			this.posicao_y_dst = Math.floor((Math.random()*(600-tamanho_h)+1))
		}
		
		//verifica a posicao y do aviao	em baixo
		if(this.posicao_y_dst >= 458)
		{
			this.posicao_y_dst = Math.floor((Math.random()*(600-tamanho_h)+1))
		}
                
        }//fecha update
        
        this.Draw = function()//funcao desenhar (draw)
        {//abre draw
        		
        		//desenha o aviao.            
                if(this.visible == true)
				{
             
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
				}
				
				this.para1.draw();
                
        }//fecha draw
		
		this.mouse_down = function(mouse)
		{
			this.para1.mouse_down(mouse);
			//verifica a colicao do aviao.
			if(Collide(mouse.x-10, mouse.y-11, 1, 1, this.posicao_x_dst, this.posicao_y_dst, this.tamanho_w_dst*this.scale_x, this.tamanho_h_dst*this.scale_y))	
			{	
				if(this.visible) 
				{
					this.pontos += 10;
					this.visible = false;
					this.clico = true;
					this.para1.posicao_x_dst = this.posicao_x_dst;
					this.para1.posicao_y_dst = this.posicao_y_dst;
					this.para1.visible = true;
				}
				
			}
			
		}
        
}//fecha 