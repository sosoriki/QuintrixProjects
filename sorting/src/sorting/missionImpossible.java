package sorting;

public class missionImpossible {
	public static int maxTroops(laserTower[] towers) {
		int area = 0;
		for(int i = 0; i < towers.length; i++) {
			int temp =  towers[i].x * towers[i].y;
			if(area < temp) {
				area = temp;
			}
		}
		return area;
	}
	
	public static class laserTower{
		public int x;
		public int y;
		
		public laserTower(int x, int y) {
			this.x = x;
			this.y = y;
		}
	}
	
	public static void main(String[] args) {
		laserTower tower1 = new laserTower(3, 5); //15
		laserTower tower2 = new laserTower(3, 7); //21
		laserTower tower3 = new laserTower(8, 5); //40
		laserTower tower4 = new laserTower(2, 9); //18
		laserTower tower5 = new laserTower(1, 7); //7
		laserTower[] towers = new laserTower[]{tower1, tower2, tower3, tower4, tower5};
		System.out.printf("Max number of troops: %d", maxTroops(towers));
	}

}
