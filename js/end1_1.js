function End1_1(){

	this.fundo_lose = new Fundo("imgs/venceu.png", 0, 0);
	this.jh = new Botao("imgs/jh.png", 193, 62, 11, 1);
	this.nw = new Botao("imgs/nw.png", 184, 64, 208, 1);
	
	this.update = function()
	{
	
	}
	
	this.draw = function()
	{
		this.fundo_lose.draw();
		this.jh.draw();
		this.nw.draw();
	}
	this.mouse_down = function(mouse)
	{//abre mouse down
		
		if(this.jh.clicado(mouse))
		{
			window.open("http://www.facebook.com/JoystickHouse");
		}
		
		if(this.nw.clicado(mouse))
		{
			window.open("http://nwdesign.com.br");
		}
		
		currentScene = SCENES.INTRO;

	}//fecha mouse down

}