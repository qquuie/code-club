#include <iostream>
#include <conio.h>  
using namespace std;

class Moneybag {
	int money = 0;
public:
	 Moneybag(int a) {
		money = a;
	};
	void savemoney(int a) {
		cout << "Save "<< a << " dollars." << endl;
		cout << "---------------------------" << endl;
		money += a;
	};
	void depositmoney(int a) {
		cout << "Deposit " << a << " dollars." << endl;
		cout << "---------------------------" << endl;
		money -= a;
	};
	void showmoney(){
		cout << "Moneybag have " << money << " dollars now!" << endl;
		cout << "---------------------------" << endl;
	};
};

int main()
{
	Moneybag Henry(100);
	Henry.showmoney();
	Henry.savemoney(50);
	Henry.showmoney();
	Henry.depositmoney(70);
	Henry.showmoney();
	_getch();
}
