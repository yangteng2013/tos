package com.hitisoft.fos.tran.entity;

import java.io.Serializable;
import javax.persistence.*;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import java.util.Date;


/**
 * The persistent class for the t_driver database table.
 * 
 */
@Entity
@org.hibernate.annotations.Entity(dynamicInsert = true)
@Table(name="T_DRIVER")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class TDriver extends com.hitisoft.fw.orm.jpa.BaseDomain implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer deposit;
	//司机代码
	private String driverCode;
	//司机名称
	private String driverName;
	//有效期（从）
	private Date effectiveDateFrom;
	//有效期（到）
	private Date effectiveDateTo;
	//性别
	private String gender;
	//家里电话
	private String homeTel;
	//身份证号码
	private String idNo;
	//年检日期（从）
	private Date inspectDateFrom;
	//年检日期（到）
	private Date inspectDateTo;
	//入公司日期
	private Date joinDate;
	//离公司日期
	private Date leaveDate;
	//领证日期
	private Date licenseDate;
	//驾驶证号
	private String licenseNo;
	//手机号码
	private String mobile;
	//车队ID
	private Integer motorcadeId;
	//车队名称
	private String motorcadeName;
	//备注
	private String remark;
	//车辆ID
	private Integer vehicleId;
	//车牌号
	private String vehicleNo;
	//‘运输状态’ 0空闲，1驾驶中
	private Integer transTaskStatus;

    public TDriver() {  }

	@Column(name="DEPOSIT")
	public Integer getDeposit() {
		return this.deposit;
	}

	public void setDeposit(Integer deposit) {
		this.deposit = deposit;
	}


	@Column(name="DRIVER_CODE")
	public String getDriverCode() {
		return this.driverCode;
	}

	public void setDriverCode(String driverCode) {
		this.driverCode = driverCode;
	}


	@Column(name="DRIVER_NAME")
	public String getDriverName() {
		return this.driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}


    @Temporal( TemporalType.DATE)
	@Column(name="EFFECTIVE_DATE_FROM")
	public Date getEffectiveDateFrom() {
		return this.effectiveDateFrom;
	}

	public void setEffectiveDateFrom(Date effectiveDateFrom) {
		this.effectiveDateFrom = effectiveDateFrom;
	}


    @Temporal( TemporalType.DATE)
	@Column(name="EFFECTIVE_DATE_TO")
	public Date getEffectiveDateTo() {
		return this.effectiveDateTo;
	}

	public void setEffectiveDateTo(Date effectiveDateTo) {
		this.effectiveDateTo = effectiveDateTo;
	}


	@Column(name="GENDER")
	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}


	@Column(name="HOME_TEL")
	public String getHomeTel() {
		return this.homeTel;
	}

	public void setHomeTel(String homeTel) {
		this.homeTel = homeTel;
	}


	@Column(name="ID_NO")
	public String getIdNo() {
		return this.idNo;
	}

	public void setIdNo(String idNo) {
		this.idNo = idNo;
	}


    @Temporal( TemporalType.DATE)
	@Column(name="INSPECT_DATE_FROM")
	public Date getInspectDateFrom() {
		return this.inspectDateFrom;
	}

	public void setInspectDateFrom(Date inspectDateFrom) {
		this.inspectDateFrom = inspectDateFrom;
	}


    @Temporal( TemporalType.DATE)
	@Column(name="INSPECT_DATE_TO")
	public Date getInspectDateTo() {
		return this.inspectDateTo;
	}

	public void setInspectDateTo(Date inspectDateTo) {
		this.inspectDateTo = inspectDateTo;
	}


    @Temporal( TemporalType.DATE)
	@Column(name="JOIN_DATE")
	public Date getJoinDate() {
		return this.joinDate;
	}

	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}


    @Temporal( TemporalType.DATE)
	@Column(name="LEAVE_DATE")
	public Date getLeaveDate() {
		return this.leaveDate;
	}

	public void setLeaveDate(Date leaveDate) {
		this.leaveDate = leaveDate;
	}


    @Temporal( TemporalType.DATE)
	@Column(name="LICENSE_DATE")
	public Date getLicenseDate() {
		return this.licenseDate;
	}

	public void setLicenseDate(Date licenseDate) {
		this.licenseDate = licenseDate;
	}


	@Column(name="LICENSE_NO")
	public String getLicenseNo() {
		return this.licenseNo;
	}

	public void setLicenseNo(String licenseNo) {
		this.licenseNo = licenseNo;
	}


	@Column(name="MOBILE")
	public String getMobile() {
		return this.mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	@Column(name="MOTORCADE_ID")
	public Integer getMotorcadeId() {
		return this.motorcadeId;
	}

	public void setMotorcadeId(Integer motorcadeId) {
		this.motorcadeId = motorcadeId;
	}


	@Column(name="MOTORCADE_NAME")
	public String getMotorcadeName() {
		return this.motorcadeName;
	}

	public void setMotorcadeName(String motorcadeName) {
		this.motorcadeName = motorcadeName;
	}


	@Column(name="REMARK")
	public String getRemark() {
		return this.remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}


	
	@Column(name="VEHICLE_ID")
	public Integer getVehicleId() {
		return this.vehicleId;
	}

	public void setVehicleId(Integer vehicleId) {
		this.vehicleId = vehicleId;
	}


	@Column(name="VEHICLE_NO")
	public String getVehicleNo() {
		return this.vehicleNo;
	}

	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}

	@Column(name="TRANS_TASK_STATUS")
	public Integer getTransTaskStatus() {
    	return transTaskStatus;
    }

	public void setTransTaskStatus(Integer transTaskStatus) {
    	this.transTaskStatus = transTaskStatus;
    }

	
}