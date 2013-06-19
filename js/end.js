function End()
{

	this.fundo_wins = new Fundo("imgs/perdeu.png", 0, 0);
	
	this.update = function()
	{
	
	}
	
	this.draw = function()
	{
		this.fundo_wins.draw();
	}

}